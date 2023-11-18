$(document).ready(function() {
    $('#pokemonSearchForm').submit(function(e) {
        e.preventDefault();
        var pokemonName = $('#pokemonName').val();
        $.getJSON('https://pokeapi.co/api/v2/pokemon/' + pokemonName.toLowerCase(), function(data) {
            $('#message').addClass('d-none');
            $('#card').removeClass('invisible');
            $('#card h3').text(data.name);
            $('#card img:first-child').attr('src', data.sprites.front_default);
            $('#card img:last-child').attr('src', data.sprites.back_default);
            $('#card div').empty();
            data.types.forEach(function(type) {
                $('#card div').append('<span class="badge badge-primary">' + type.type.name + '</span> ');
            });
        }).fail(function() {
            $('#message').text('Pokemon not found.').removeClass('d-none');
            $('#card').addClass('invisible');
        });
    });
});