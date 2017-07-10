console.log('linked');
$(document).ready(() => {
  console.log('ready');

  // when #pokeButton is clicked...
  $('#pokeButton').click(() => {
    alert('you clicked me! 🐱');
    getPokemonInfo(42);
              //  hard coded for now
  });

  $('#pokeSearchForm').submit((event) => {
    // prevent default behavior
    event.preventDefault();
    // retrieve user input in form
    const pokeNumber = $('#pokemonId').val();
    getPokemonInfo(pokeNumber);
  });
});

function getPokemonInfo(myId) {
    // fetch data from pokeAPI
    $.ajax({  // 1st arg -> settings object
              // minimum 4 setting: 'url', 'method', 'success', 'error'
        url:'http://pokeapi.co/api/v2/pokemon/' + myId,
        method:'GET',
        // if successul, display info on screen
        success:(responseFromApi) => {
          //    the first parameter will be data we get from API
          console.log("response for pokemon: " + myId);
          console.log(responseFromApi);
          $('#pokeInfo').html(`${responseFromApi.name}
                              <img src="${responseFromApi.sprites.front_default}">`
                            );
        },
        // if error, show error feedback
        error:(errorFromApi) => {
          alert('sorry, pokemon data error 🙃');
        }
    });
}
