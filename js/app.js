    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.mercadolibre.com/sites/MLC/search?q=${Filtros para Autos}&limit=13';

      fetch( proxyurl + url)
      .then(response => response.json())
      .then(data => {
          //console.log(data);

          const listItems = data.results;

          for(const info in listItems){

            const generalFilterInfo = listItems[info].category_id;

            //console.log(generalFilterInfo);
            
            //console.log(listItems[info]);

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
                                                
                                                    <i class="fas fa-heart product-fa-heart"></i>
                                                    <i class="fas fa-shopping-cart product-fa-shopping-cart"></i>
                                                    <i class="fas fa-eye product-fa-eye"></i>
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
                                                
                                                <i class="fas fa-heart product-fa-heart"></i>
                                                <i class="fas fa-shopping-cart product-fa-shopping-cart"></i>
                                                <i class="fas fa-eye product-fa-eye"></i>
                                        </div>
                                    </div>`;

                return containerInfo;
        
            }

            $(".item-container").append(template(title, link, price,image));


        }


        }



      })
      .catch(err => console.log(err));

      $('.shopping-cart').click(function(){

        Swal.fire({
            icon: 'info',
            title: 'Tu carrito de compras esta vacio.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })

      });

      $('.wish-list').click(function(){

        Swal.fire({
            icon: 'info',
            title: 'No has agregado productos a tu lista de deseos.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })

      });


