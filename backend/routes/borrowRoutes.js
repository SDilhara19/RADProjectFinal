import express from 'express';
import { Borrow } from '../models/bookModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try 
    {
        if (
            !request.body.UserId ||
            !request.body.BookId ||
            !request.body.ReturneDate
        ) {
            return response.status(400).send({
                message: 'Send all required fields: UserId, BookId, ReturneDate',
            });
        }  
        const newBorrow = {
           UserId: request.body.UserId,
           BookId: request.body.BookId,
        ReturneDate: request.body.ReturneDate
        }; 
        
        const borrow = await Borrow.create(newBorrow);

        return response.status(201).send(borrow);

    } catch (error) 
    {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});

router.get('/', async (request, response) => {
    try {
        const borrow = await Borrow.find({});

        return response.status(200).json({
            count: borrow.length,
            data: borrow
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const borrow = await Borrow.findById(id);

        return response.status(200).json(borrow);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.UserId ||
            !request.body.BookId ||
            !request.body.ReturneDate
        ){
            return response.status(400).send({
                message: 'Send all requires fields: UserId, BookId, RetuneDate',
            });
        }

        const { id } = request.params;

        const result = await Borrow.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Borrow not found' });
        }

        return response.status(200).send({ message: 'Borrow updated successfully' });
        }

    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Borrow.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: 'Borrow not found' });
        }
        
        return response.status(200).send({ message: 'Borrow deleted successfully' });
       
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;