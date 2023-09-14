import express from 'express';
import { Stock } from '../models/StockModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try 
    {
        if (
            !request.body.BookId ||
            !request.body. AvailableStock
        ) {
            return response.status(400).send({
                message: 'Send all required fields: BookId, AvailableStock',
            });
        }  
        const newStock = {
            BookId: request.body.BookId,
            AvailableStock: request.body.AvailableStock,
        }; 
        
        const stock = await Stock.create(newStock);

        return response.status(201).send(stock);

    } catch (error) 
    {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});

router.get('/', async (request, response) => {
    try {
        const stock = await Stock.find({});

        return response.status(200).json({
            count: stock.length,
            data: stock
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const stock= await Stock.findById(id);

        return response.status(200).json(stock);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.BookId ||
            !request.body.AvailableStock 
        ){
            return response.status(400).send({
                message: 'Send all requires fields: BookId, AvailableStock',
            });
        }

        const { id } = request.params;

        const result = await Stock.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Stock not found' });
        }

        return response.status(200).send({ message: 'Stock updated successfully' });
        }

    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Stock.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: 'stock not found' });
        }
        
        return response.status(200).send({ message: 'Stock deleted successfully' });
       
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;