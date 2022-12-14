import sjcl from '@tinyanvil/sjcl';
import { Keypair } from 'stellar-sdk';

import { handleError } from '@services/error';
import { set } from '@services/storage';

export default async function createAccount(e: Event) {
  try {
    e.preventDefault();

    const pincode_1 = await this.setPrompt('Enter a keystore pincode');
    const pincode_2 = await this.setPrompt('Enter keystore pincode again');

    if (!pincode_1 || !pincode_2 || pincode_1 !== pincode_2) throw 'Invalid pincode';

    this.error = null;

    const keypair = Keypair.random();

    this.account = {
      publicKey: keypair.publicKey(),
      keystore: sjcl.encrypt(pincode_1, keypair.secret(), {
        adata: JSON.stringify({
          publicKey: keypair.publicKey(),
        }),
      }),
    };

    await set('keyStore', window.btoa(this.account.keystore));
  } catch (err) {
    this.error = handleError(err);
  }
}
