
import { atom } from 'recoil';
import STORAGE_KEYS from '../../../config/StorageKeys';

const atoms = {
    [STORAGE_KEYS.atoms.PRODUCTS]: atom({
        key: STORAGE_KEYS.atoms.PRODUCTS,
        default: [{ name: 'banana', id: 12345 }],
    })
}

export default atoms


