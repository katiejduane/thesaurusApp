 //to-do list:
 //drop-down menu in search bar that displays recent searches
 //display word relationship types with results below in columns?
 
 
const apiKey = '9495b8cb95dffb0d23a251c3d28d2f9a';
const baseUrl = `https://words.bighugelabs.com/api/2/${apiKey}/`


$('#word-form').submit((event) => {
    //stops the browser from going forward
    event.preventDefault();
    let wordSearch = $('#search-input').val();
    // localStorage.setItem('movieList', movieSearch)
    console.log(wordSearch);
    const wordSearchUrl = `https://words.bighugelabs.com/api/2/${apiKey}/${wordSearch}/json`
    let newHTML = '';
    $.getJSON(wordSearchUrl,(wordInfo)=>{
        console.log(wordInfo)
        for (let key in wordInfo) {
            newHTML += 
            `
            <div class="wordType">
            ${key}</div>
            <div class="relBox">`
            for (let key2 in wordInfo[key]) {
                if (key2 == 'syn') {
                    newHTML += `<div class="wordRel">
                    Synonyms</div>`
                }
                if (key2 == 'ant') {
                    newHTML += `<div class="wordRel">
                    Antonyms</div>`
                }
                if (key2 == 'sim') {
                    newHTML += `<div class="wordRel">
                    Similar Words</div>`
                }
                if (key2 == 'usr') {
                    newHTML += `<div class="wordRel">
                    User Suggestions</div>`
                }
                if (key2 == 'rel') {
                    newHTML += `<div class="wordRel">
                    Related Terms</div>`
                }
              
                    let wordArray = wordInfo[key][key2]
                    for (let i = 0; i < wordArray.length; i++) {
                        if (i < wordArray.length - 1) {
                        newHTML += `<span class="relResults">${wordArray[i]}, </span>`
                        } else if (i == wordArray.length - 1) {
                            newHTML += `<span class="relResults">${wordArray[i]} </span>`
                        }
                    }
            }
            newHTML += `</div>`
        } 
        
        $('.word-info-box').html(newHTML)
    }) 
})



