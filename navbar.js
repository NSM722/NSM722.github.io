$(document).ready(function() {
    console.log( "NAV ready!" );
    let menu = [
        {
            "url": "Home.html",
            "title": "Home"
        },
        {
            "url": "Menu.html",
            "title": "Menu"
        },
        {
            "url": "About.html",
            "title": "About Us"
        },  
        {
            "url": "Team.html",
            "title": "Our Team"
        },
        {
            "url": "Contact.html",
            "title": "Contact Us"
        },
    ]
    $.each(menu, function(key, nav) {
        console.log(nav.title)
        $("#navigation").append(`<li class="nav-item">
                    <a class="nav-link" href="${nav.url}">${nav.title}</a>
                </li>`);
    });

    $.ajax({
        url: 'https://opensheet.vercel.app/1Xt48Tfm0Nf6ITDM-PaQx6PyVRNyJUPjRcy5UoqdKtsQ/Menu',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $.each(data, function(key, coffee) {
                console.log(coffee.Title)
                $('#coffeedrinks').append(`<div class="col-md-3 mt-3 text-center">
                        <img src="${coffee.PicURL}" alt="coffeeImage" class="rounded" width="65%">
                        <h5>${coffee.Title}</h5>
                        <p class="drinks_prices m-0 p-0">${coffee.Price}</p>
                        <p>${coffee.Description}</p>
                    </div>`);
            })
        }
    });
});

$.ajax({
    url: 'https://randomuser.me/api/?results=6',
    dataType: 'json',
    success: function(data) {
        //console.log(data);
          $.each(data.results, function(key, person){
            $('#Randomusers').append(`<div class="col-md-2 px-1 mt-2 text-center" >
                <img src="${person.picture.large}" alt="#" class="img-fluid rounded-circle">
                <h6 class="mb-0">${person.name.first} ${person.name.last}</h6>
                <p class="mb-1 mt-0 pt-0"><span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span></p>
                </div>`
            );
        })
    }
});
 