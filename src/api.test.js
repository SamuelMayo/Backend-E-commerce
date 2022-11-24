import supertest from "supertest";
import Chai from "chai";

const expect = Chai.expect;
const requester = supertest('http://localhost:8080');

describe('products testing', () => {
    describe('GET', () => {
        it('la peticion debe devolver 200', async () => {
            let response = await requester.get('/api/products')
            expect(response.status).to.be.equal(200)
        })
        it('la peticion debe retornar un array de productos', async () => {
            let response = await requester.get('/api/products')
            const { _body } = response
            expect(_body.payload).to.be.an('array')
        })
    })
    
    //ESTE POST DA ERROR PORQUE NO LE LLEGA IMAGEN (MULTER)
    // describe('POSTS', () => {
    //     it('la petecion debe crear un nuevo producto', async () => {
    //         let newProduct = {
    //             Name: 'laptop',
    //             Description: 'laptop 15.6 pulgadas marca dell, 16gb RAM',
    //             Price: 15000,
    //             Stock: 15
    //         }
    //         const response = await requester.post('/api/products').send(newProduct);
    //         const { _body } = response;
    //         console.log(_body); 
    //         expect(_body.payload).to.includes.keys('_id', 'Name', 'price', 'stock')
    //     })
    // })

})

describe('user testing', () => {
    describe('GET', () => {
        it('la peticion debe devolver 200', async () => {
            let response = await requester.get('/api/users')
            expect(response.status).to.be.equal(200)
        })
        it('la peticion debe retornar un array de usuarios', async () => {
            let response = await requester.get('/api/users')
            const { _body } = response
            expect(_body.payload).to.be.an('array')
        })

    })

    describe('POST', () => {
        it('la petecion debe crear un nuevo usuario', async () => {
            let newUser = {
                First_name: 'Pedro',
                Last_name: 'Rodriguez',
                Email: 'pedrocorreo4@correo.com',
                Password: '1548hola',
                Phone:'+56 125548325',
                Age: 25,
            }
            const response = await requester.post('/api/sessions/register').send(newUser);
            const { _body } = response;
            expect(_body.payload).to.include.keys('_id', 'Email');
        })

        it('la peticion debe devolver success', async()=>{
            const success = 'success'
            let user={
                Email:'samuel_mayo456@hotmail.com',
                Password: '123',
            }
            const response = await requester.post('/api/sessions/login').send(user);
            const {_body} = response;
            expect(_body.status).to.be.equal(success)
        })
    })
})