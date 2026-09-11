// const counterElement = document.getElementById("counter");
// let count = 1000;
// const target = 1859;
// const duration = 2000;
// const stepTime = duration / target;

// const timer = setInterval(() => {
//   count++;
//   counterElement.innerText = count;
//   if (count >= target) {
//     clearInterval(timer);
//   }
// }, stepTime);

function startCounter(
  counterElement,
  startValue,
  targetValue,
  duration = 2000,
) {
  let currentCount = startValue;

  // Berechnet die Zeit pro Schritt basierend auf der echten Differenz
  const totalSteps = Math.abs(targetValue - startValue);
  const stepTime = totalSteps > 0 ? duration / totalSteps : duration;

  const timer = setInterval(() => {
    currentCount++;
    counterElement.innerText = currentCount;

    if (currentCount >= targetValue) {
      clearInterval(timer);
    }
  }, stepTime);
}

const counterElement = document.getElementById("counter");
// Startet bei 1000, zählt bis 1881, dauert 2000 Millisekunden
startCounter(counterElement, 1000, 1859, 2000);
const counterElement2 = document.getElementById("counter2");
startCounter(counterElement2, 1000, 1877, 2000);
const counterElement3 = document.getElementById("counter3");
startCounter(counterElement3, 1000, 1881, 2000);
const counterElement4 = document.getElementById("counter4");
startCounter(counterElement4, 1000, 1888, 2000);
const counterElement5 = document.getElementById("counter5");
startCounter(counterElement5, 1000, 1890, 2000);
const counterElement6 = document.getElementById("counter6");
startCounter(counterElement6, 1000, 1890, 2000);
const counterElement7 = document.getElementById("counter7");
startCounter(counterElement7, 1000, 1896, 2000);
const counterElement8 = document.getElementById("counter8");
startCounter(counterElement8, 1000, 1897, 2000);
const counterElement9 = document.getElementById("counter9");
startCounter(counterElement9, 1000, 1900, 2000);
const counterElement10 = document.getElementById("counter10");
startCounter(counterElement10, 1000, 1905, 2000);
const counterElement11 = document.getElementById("counter11");
startCounter(counterElement11, 1000, 1908, 2000);
const counterElement12 = document.getElementById("counter12");
startCounter(counterElement12, 1000, 1913, 2000);
const counterElement13 = document.getElementById("counter13");
startCounter(counterElement13, 1000, 1914, 2000);
const counterElement14 = document.getElementById("counter14");
startCounter(counterElement14, 1000, 1914, 2000);
const counterElement15 = document.getElementById("counter15");
startCounter(counterElement15, 1000, 1916, 2000);
const counterElement16 = document.getElementById("counter16");
startCounter(counterElement16, 1000, 1918, 2000);
const counterElement17 = document.getElementById("counter17");
startCounter(counterElement17, 1000, 1918, 2000);
const counterElement18 = document.getElementById("counter18");
startCounter(counterElement18, 1000, 1921, 2000);
const counterElement19 = document.getElementById("counter19");
startCounter(counterElement19, 1000, 1922, 2000);
const counterElement20 = document.getElementById("counter20");
startCounter(counterElement20, 1000, 1941, 2000);
