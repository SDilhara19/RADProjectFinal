import express from 'express';
import { InShelf } from '../models/inShelfModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try 
    {
        if (
            !request.body.bookname ||
            !request.body.availability ||
            !request.body.shelfNo   
        ) {
            return response.status(400).send({
                message: 'Send all required fields: bookname, availability, shelfNo'
            });
        }  
        const newInShelf = {
            bookname: request.body.bookname,
            availability: request.body.availability,
            shelfNo: request.body.shelfNo,
            
        }; 
        
        const inShelf = await InShelf.create(newInShelf);

        return response.status(201).send(inShelf);

    } catch (error) 
    {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});

router.get('/', async (request, response) => {
    try {
        const inShelfs= await InShelf.find({});

        return response.status(200).json({
            count: inShelfs.length,
            data: inShelfs
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const inShelf= await InShelf.findById(id);

        return response.status(200).json(inShelf);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.bookname ||
            !request.body.availability ||
            !request.body.shelfNo 
        ){
            return response.status(400).send({
                message: 'Send all requires fields: bookname, availability, shelfNo',
            });
        }

        const { id } = request.params;

        const result = await InShelf.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'InShelf id not found' });
        }

        return response.status(200).send({ message: 'InShelf updated successfully' });
        }

    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await InShelf.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: 'InShelf id not found' });
        }
        
        return response.status(200).send({ message: 'InShelf deleted successfully' });
       
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;