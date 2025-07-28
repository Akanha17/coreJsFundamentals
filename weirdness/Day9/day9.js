// Day 9 — Callbacks, Promises & Async/Await

/* 1️⃣ Callback Hell Example */
function step1(cb) {
  setTimeout(() => {
    console.log("Step 1 done");
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2 done");
    cb();
  }, 1000);
}

function step3(cb) {
  setTimeout(() => {
    console.log("Step 3 done");
    cb();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("✅ All steps done (callback hell)");
    });
  });
});


/* 2️⃣ Promises: Clean Chain */
function doStep(step, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step ${step} done`);
      resolve();
    }, delay);
  });
}

doStep(1, 1000)
  .then(() => doStep(2, 1000))
  .then(() => doStep(3, 1000))
  .then(() => console.log("✅ All steps done (promise chain)"));


/* 3️⃣ async/await version */
async function runSteps() {
  await doStep(1, 1000);
  await doStep(2, 1000);
  await doStep(3, 1000);
  console.log("✅ All steps done (async/await)");
}

runSteps();


/* 4️⃣ Promise rejection handling */
function riskyJob(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("❌ Failed!");
      else resolve("✅ Success!");
    }, 500);
  });
}

riskyJob(false)
  .then(console.log)
  .catch(console.error);

riskyJob(true)
  .then(console.log)
  .catch(console.error);


/* 5️⃣ Mixing callback + promise (bad practice!) */
function oldStyle(cb) {
  setTimeout(() => {
    cb("👴 Callback value");
  }, 500);
}

function newStyle() {
  return new Promise((resolve) => {
    oldStyle(resolve); // 👈 technically works but avoid this
  });
}

newStyle().then(console.log); // output: 👴 Callback value