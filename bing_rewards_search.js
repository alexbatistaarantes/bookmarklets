/*
Para ser usado com ferramentas de userscript no navegador (ViolentMonkey ou UBlock por exemplo).
Pesquisar no Bing a palavra de gatilho, que o script irá ativar e fazer pesquisas automaticamente.
*/

const triggerWord = "preencher";
const searchesToDo = 30;
const sleepTimeSeconds = 3;

function waitForElm(selector) { /* https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists */
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

function sleep(ms) { /* https://stackoverflow.com/questions/46942255/javascript-how-do-i-wait-x-seconds-before-running-next-line-of-code */
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  await sleep(sleepTimeSeconds * 1000);

  const searchBar = await waitForElm("#sb_form_q");
  const searchButton = await waitForElm("#sb_form_go");

  if(searchBar.value.toLowerCase().startsWith("preencher")){
    /* Inicia pesquisa */
    if(searchBar.value.trim().length == triggerWord.length){
      searchBar.value += " " + Array.from({length: searchesToDo}, (_, b) => `${b % 10}`).join("");
    }
    /* Muda pesquisa */
    else{
      searchBar.value = searchBar.value.slice(0, -1);
    }

    searchButton.click();
  }
}

main();
