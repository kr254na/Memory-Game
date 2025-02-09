const message = document.getElementById("message");
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const messagebox = document.querySelector(".messagebox");
const button = document.querySelector("button");
function getRandomSymbol1() {
  return Math.random() > 0.5 ? 1 : 0;
}
function getRandomSymbol2() {
  return Math.floor(Math.random() * 10);
}
async function generateImage() {
  return new Promise(resolve => {
    setTimeout(() => {
      reel1.textContent = getRandomSymbol2();
      reel2.textContent = getRandomSymbol2();
      resolve();
    }, 50); // simulating animation delay
  });
}
button.addEventListener("click", async () => {
  console.log("Button clicked, starting the process..."); 
  await generateImage(); // Spin 1
  await generateImage(); // Spin 2
  // Ensure we have the right timing for the final reel display
  setTimeout(async () => {
    console.log("Final spin started...");
    let deckNumber = 0;
    let attempts = 0; // To prevent infinite loops
    do {
      reel1.textContent = getRandomSymbol1();
      reel2.textContent = getRandomSymbol2();
      deckNumber = parseInt(reel1.textContent + reel2.textContent);
      
      // Safety check: If we loop too many times, stop to avoid freezing
      attempts++;
      if (attempts > 100) {
        console.error("Too many attempts to find a valid deck number");
        break;
      }
      
    } while (deckNumber > 12 || deckNumber === 0); // Valid deck number check
    
    // Display the result
    console.log(`Reels stopped: ${reel1.textContent} ${reel2.textContent}`);
    
    message.textContent = `All the Best! Your deck number is ${deckNumber}`;
    button.style.display = "none";
    messagebox.style.display = "block";

    // Optional: Redirect after 2 seconds (uncomment if needed)
    setTimeout(() => {
      window.location.href = `/decks/${deckNumber}`;
    }, 1000); 
    
  }, 200); // Giving it some time after the spins
});
// const message = document.getElementById("message");
// const reel1 = document.getElementById("reel1");
// const reel2 = document.getElementById("reel2");
// const messagebox = document.querySelector(".messagebox");
// const button=document.querySelector("button");
// const result = [getRandomSymbol1(), getRandomSymbol2()];
// let generateImage = () => {
//     setTimeout(() => {
//         reel1.textContent = getRandomSymbol2();
//         reel2.textContent = getRandomSymbol2();
//     }, 100);
// }
// button.addEventListener("click", async () => {
//     await generateImage();
//     await generateImage();
    
//     setTimeout(() => {
//         reel1.textContent = getRandomSymbol2();
//         reel2.textContent = getRandomSymbol2();
//         do{
//             reel1.textContent = getRandomSymbol1();
//             reel2.textContent = getRandomSymbol2();
//             }while(parseInt(reel1.textContent+reel2.textContent)>12 || parseInt(reel1.textContent+reel2.textContent)==0);
//             console.log(`${reel1.textContent} ${reel2.textContent}`);
//                 message.textContent = `All the Best! Your deck number is ${reel1.textContent}${reel2.textContent} ` ;
//         button.style.display = "none";
//         messagebox.style.display = "block";
//         /*setTimeout(() => {
//             window.location.href = `/decks/${parseInt(reel1.textContent+reel2.textContent)}`
//         }, 2000);*/
//     },100)
// });
// function getRandomSymbol1() {
// return Math.random()>0.5?1:0;
// }
// function getRandomSymbol2() {
// return Math.floor(Math.random()*10);
// }
    /*button.addEventListener("click", () => {
        setTimeout(() => {
            reel1.textContent = getRandomSymbol2();
            reel2.textContent = getRandomSymbol2();
            setTimeout(() => {
                reel1.textContent = getRandomSymbol2();
                reel2.textContent = getRandomSymbol2();
                setTimeout(() => {
                    reel1.textContent = getRandomSymbol2();
                    reel2.textContent = getRandomSymbol2();
                    setTimeout(() => {
                        reel1.textContent = getRandomSymbol2();
                        reel2.textContent = getRandomSymbol2();
                        setTimeout(() => {
                            reel1.textContent = getRandomSymbol2();
                            reel2.textContent = getRandomSymbol2();
                            setTimeout(() => {
                                reel1.textContent = getRandomSymbol2();
                                reel2.textContent = getRandomSymbol2();
                                setTimeout(() => {
                                    reel1.textContent = getRandomSymbol2();
                                    reel2.textContent = getRandomSymbol2();
                                    setTimeout(() => {
                                        reel1.textContent = getRandomSymbol2();
                                        reel2.textContent = getRandomSymbol2();
                                        setTimeout(() => {
                                            reel1.textContent = getRandomSymbol2();
                                            reel2.textContent = getRandomSymbol2();
                                            setTimeout(() => {
                                                reel1.textContent = getRandomSymbol2();
                                                reel2.textContent = getRandomSymbol2();
                                                setTimeout(() => {
                                                    reel1.textContent = getRandomSymbol2();
                                                    reel2.textContent = getRandomSymbol2();
                                                    setTimeout(() => {
                                                        reel1.textContent = getRandomSymbol2();
                                                        reel2.textContent = getRandomSymbol2();
                                                        setTimeout(() => {
                                                            reel1.textContent = getRandomSymbol2();
                                                            reel2.textContent = getRandomSymbol2();
                                                            setTimeout(() => {
                                                                reel1.textContent = getRandomSymbol2();
                                                                reel2.textContent = getRandomSymbol2();
                                                                setTimeout(() => {
                                                                    reel1.textContent = getRandomSymbol2();
                                                                    reel2.textContent = getRandomSymbol2();
                                                                    do{
                                                                        reel1.textContent = result[0];
                                                                        reel2.textContent = result[1];
                                                                        }while(parseInt(reel1.textContent+reel2.textContent)>12 || parseInt(reel1.textContent+reel2.textContent)==0);
                                                                        console.log(`${reel1.textContent} ${reel2.textContent}`);
                                                                            message.textContent = `All the Best! Your deck number is ${reel1.textContent} ${reel2.textContent} ` ;
                                                                    button.style.display = "none";
                                                                    messagebox.style.display = "block";
                                                                    setTimeout(() => {
                                                                        window.location.href = `/decks/${parseInt(reel1.textContent+reel2.textContent)}`
                                                                    }, 2000);
                                                                })
                                                                },100)
                                                            },100)
                                                        },100)
                                                    },100)
                                                },100)
                                            },100)
                                        },100)
                                    },100)
                                },100)
                            },100)
                        },100)
                    },100)
                },100)
            }, 100)
        },100)
    */