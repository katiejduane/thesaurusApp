const apiKey = '9495b8cb95dffb0d23a251c3d28d2f9a';
const baseUrl = `https://words.bighugelabs.com/api/2/${apiKey}/`


$('#word-form').submit((event) => {
    //stops the browser from going forward
    event.preventDefault();
    const wordSearch = $('#search-input').val();
    // localStorage.setItem('movieList', movieSearch)
    console.log(wordSearch);
    const wordSearchUrl = `https://words.bighugelabs.com/api/2/${apiKey}/${wordSearch}/json`
    let newHTML = '';
    $.getJSON(wordSearchUrl,(wordInfo)=>{
        console.log(wordInfo)
        for (let key in wordInfo) {
            newHTML += 
            `<div class="wordType">
            ${key}</div>
            <div class="relBox">`
            for (let key2 in wordInfo[key]) {
                newHTML += `<div class="wordRel">
                ${key2}</div>`
                let wordArray = wordInfo[key][key2]
                for (let i = 0; i < wordArray.length; i++) {
                    newHTML += `<div class="relResults">${wordArray[i]}</div>`
                }
            }
            newHTML += `</div>`
        } 
        
        $('.results-box').html(newHTML)
    }) 
})



