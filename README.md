# cartoriofrontvuejs

> A Vue.js project

## Build Setup

# install node js
brew update
brew install node

``` bash
# install dependencies
npm install

# install vue client
npm install vue-resource@1.0.3 --save

#install vue router
npm install vue-router@2.1.1 --save

#install bootstrap
npm i bootstrap-vue

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

/*
    const auth = {
        headers: {Authorization:'JWT ' + localStorage.getItem('token')} 
    }

    axios.get('http://yourapi.com',auth).then(result => { 
    console.log(result.data)
    })

    //in post request
    const auth = {
            headers: {Authorization:'JWT ' + localStorage.getItem('token')} 
        }
    //note:auth will be 3rd parameter in post request
    axios.post('http://yourapi.com',{somekey:'some value'},auth).then(result => { 
    console.log(result.data)
    })
*/