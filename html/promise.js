const element = document.getElementById("a");

const myPromise = new Promise((resolve, reject) => {
  element.addEventListener("click", () => {
    resolve("click");
  });
});

async function myFunc() {
  console.log("Hello World!");

  const result = await myPromise;
  console.log("hihih");
  return "hehe";
}

const res = await myFunc();
console.log("kokok");
console.log(res);
