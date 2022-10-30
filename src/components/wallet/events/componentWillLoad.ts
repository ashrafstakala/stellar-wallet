import { handleError } from '@services/error';
import { get } from '@services/storage';

export default async function componentWillLoad() {
  try {
    let keystore = await get('keyStore');

    this.error = null;

    if (keystore) {
      keystore = window.atob(keystore);

      const { publicKey } = JSON.parse(window.atob(JSON.parse(keystore).adata));

      this.account = {
        publicKey,
        keystore,
      };
    }
  } catch (err) {
    this.error = handleError(err);
  }
}
