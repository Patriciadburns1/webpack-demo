import $ from 'jquery';
import './style.css';
// import bunny from './bunny.jpeg'; 



$("#login").click(() => {
    console.log("button clicked");
    import('./helpers').then(response => {
        console.log("import response", response);
        const { login, addToDom } = response;

        const result1 = login('SassySally', 'sassypants');

        const result2 = login('AuthorWoman', 'hello');

        addToDom('h1', result1, 'purple');
        addToDom('h2', result2, 'red');


    });
});

$('#load-image').click(() => {
    console.log('load button');

    import('./helpers').then(resp => {
        const { addImg } = resp;
        import('./bunny.jpeg').then(src => {
            // console.log("src", src)
            addImg(src.default);
        })

    })

});


// // $('#load-image').click( async () => {
// //     console.log('load button');
//         const resp = await import('./helpers');
// //     const {addImg} = resp;
// //      const src = await import ('./bunny.jpeg').then(src=>{
// //     addImg(src.default);
// //         })

// //     })

// // }); 
