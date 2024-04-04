import http from '../http-common';
import { toast } from 'react-toastify';

function useFavourite(userId, productId) {
  return new Promise((resolve, reject) => {
    http.post('/allwatches/favourite/add', { userId, productId })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Termék sikeresen hozzáadva a kedvencekhez");
          resolve(response);
        }
        else {
          toast.error("Probléma adódott a művelet közben");
          reject(new Error('Probléma a művelet közben'));
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.info("A terméket már hozzáadta a kedvencekhez");
        }
        else {
          toast.error("Kérjük jelentkezzen be! ", error);
        }
        reject(error);
      });
  });
};

export default useFavourite;