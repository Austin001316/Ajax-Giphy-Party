console.log("Let's get this party started!");

const $gifInput = $("#searchTerm")
const $gifArea = $("#gif-area")

function addGif(res)    {
    let numOfResults = res.data.length;
    if (numOfResults)   {
        let createRandom = Math.floor(Math.random() * numOfResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4"});
        let $newGif = $("<img>", {
            src: res.data[createRandom].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

$("form").on("submit", async function(gifInput)  {
    gifInput.preventDefault();

    let gifValue = $gifInput.val();
    $gifInput.val("");

    const response = await axios.get('http://api.giphy.com/v1/gifs/search',{
        params: {
            q:  gifValue,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

$("#remove").on("click", function() {
    $gifArea.empty();
});