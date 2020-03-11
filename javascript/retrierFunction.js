// вариант 1
const retrier = (url, retryCount) =>
  new Promise((resolve, reject) => {
    const call = fetch(url).then(res => {
      if (res.ok) {
        resolve(res);
      } else {
        if (retryCount - 1) {
          call(url, retryCount - 1);
        } else {
          reject(res);
        }
      }
    });
    call(url, retryCount);
  });

// вариант 2
const retrier = (url, retryCount) =>
  fetch(url).then(
    res => {
      if (res.ok) {
        return res;
      }

      if (retryCount) {
        return retrier(url, retryCount - 1);
      }

      throw res.error;
    },
    res => {
      if (retryCount) {
        return retrier(url, retryCount - 1);
      }

      throw res.error;
    }
  );

// вариант 3
const retrier = (url, retryCount) =>
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res;
      }

      if (retryCount) {
        return retrier(url, retryCount - 1);
      }

      throw res.error;
    })
    .catch(err => {
      if (retryCount) {
        return retrier(url, retryCount - 1);
      }

      throw err.error;
    });

// получаем от апи какой то реальный ответ, и пробуем достучаться 5 раз до ресурса
retrier("https://some.api", 5)
  .then(res => console.log("Ответ получен корректно " + res)) // res - реальный ответ от url
  .catch(err => console.log("Получена ошибка " + err)); // err - реальная ошибка http
