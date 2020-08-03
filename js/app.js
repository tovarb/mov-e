/*
fetch('https://example.com/profile/avatar', {
        method: 'PUT'
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
*/

/*const url = `https://api.mercadolibre.com/sites/MLC/search?category=MLA1055`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));*

/*const url2 = `https://api.mercadolibre.com/sites/MLC/categories/all`;

fetch(url2)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));


    const url3 = `https://api.mercadolibre.com/sites/MLC/categories/MLC1748`;

fetch(url3)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.MLC1747.children_categories[12]);
    })
    .catch(err => console.log(err));
    
    
    MLC377254
    MLC161558

    https://api.mercadolibre.com/sites/MLC/domain_discovery/search?q=Kit Filtros Petroleo Y Aceite Ford

        "category_id": "MLC377254",
        "category_name": "Kits de Filtros",

        "category_id": "MLC161558",
        "category_name": "Filtros de Aceite",

        "category_id": "MLC161557",
        "category_name": "Filtros de Aire",

        Categorias: https://api.mercadolibre.com/sites/MLC/categories

        https://api.mercadolibre.com/sites/MLC/categories/MLA5725

        CATEGORIA ACCESORIOS PARA VEHICULOS: https://api.mercadolibre.com/categories/MLA5725

        REPUESTOS AUTOS Y CAMIONETAS ->MLA1747

        *****BUSCAR ARTICULOS POR CATEGORIA: https://api.mercadolibre.com/sites/MLA/search?category=MLA5726
    
        https://api.mercadolibre.com/sites/MLC/search?category=MLC1748

    */

    /*


   const url3 = `https://api.mercadolibre.com/sites/MLC/search?category=MLC1748`;

   fetch(url3)
       .then(response => response.json())
       .then(data => {
           console.log(data);
           const datos = data.results;
           const subcategoria = data.available_filters[0].values[5].name;
           const filtrosParaCarros = datos.filter(filtro => filtro === subcategoria);

           console.log(filtrosParaCarros);
       })
       .catch(err => console.log(err));

       */

       /*

       const url = `https://api.mercadolibre.com/sites/MLC/search?category=MLC1748`;

      fetch(url)
      .then(res => res.json())
      .then(data => {
          //console.log(data);
          //console.log(data.results);

          const listItems = data.results;

          for(const info in listItems){

              //console.log(listItems[info]);

              let title = listItems[info].title;

              let link = listItems[info].permalink;

              let price = listItems[info].price;

              let image = listItems[info].thumbnail;


              let template = (title, link, price, image) => {

                let containerInfo = `<div class="cont-info">
        
                                          <div class="cont-title"><a href="${link}"> ${title} </a></div>
        
                                          <div class="cont-image"><img src="${image} alt="${title}"></div>
        
                                          <div class="cont-price">$ ${price}</div>
        
                                          <br>
        
                                    </div>`;

                return containerInfo;
        
            }

            $(".item-container").append(template(title, link, price,image));


          }

      })
      .catch(error => {
        console.log('error', error)
      });

      */

      //-------------------

      /*
        "category_id": "MLC377254",
        "category_name": "Kits de Filtros",

        "category_id": "MLC161558",
        "category_name": "Filtros de Aceite",

        "category_id": "MLC161557",
        "category_name": "Filtros de Aire",
      */

      const urlQuery = 'https://api.mercadolibre.com/sites/MLC/search?q=${Filtros para Autos}&limit=13';

      fetch(urlQuery)
      .then(response => response.json())
      .then(data => {
          console.log(data);

          const listItems = data.results;

          for(const info in listItems){

            const generalFilterInfo = listItems[info].category_id;

            console.log(generalFilterInfo);
            
            console.log(listItems[info]);

            let title = listItems[info].title;

            let link = listItems[info].permalink;

            let price = listItems[info].price;

            let image = listItems[info].thumbnail;

            if(generalFilterInfo == 'MLC377254' || generalFilterInfo == 'MLC161558' ){


                    let template = (title, link, price, image) => {

                    let containerInfo = `<div class="container-product text-center">
                                            <a href="${link}"><img src="${image} class="img-product" alt="${title}" ></a>
                                            <div class="product-body">
                                                    <p class="title-product"><a href="${link}"> ${title} </a></p>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <p>$ ${price}</p>
                                                
                                                    <i class="fas fa-heart"></i>
                                                    <i class="fas fa-shopping-cart"></i>
                                                    <i class="fas fa-eye"></i>
                                            </div>
                                        </div>`;

                    return containerInfo;
            
                }

                $(".item-container").append(template(title, link, price,image));


            }

            else if(generalFilterInfo == 'MLC441051' || generalFilterInfo == 'MLC441052' || generalFilterInfo == 'MLC161557'){


                let template = (title, link, price, image) => {

                let containerInfo = `<div class="container-product text-center">
                                        <a href="${link}"><img src="${image} class="img-product" alt="${title}" ></a>
                                        <div class="product-body">
                                                <p class="title-product"><a href="${link}"> ${title} </a></p>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                                <p>$ ${price}</p>
                                                
                                                <i class="fas fa-heart"></i>
                                                <i class="fas fa-shopping-cart"></i>
                                                <i class="fas fa-eye"></i>
                                        </div>
                                    </div>`;

                return containerInfo;
        
            }

            $(".item-container").append(template(title, link, price,image));


        }


        }



      })
      .catch(err => console.log(err));


