import { findAll,findById,create,updateRecord,deleteRecord } from '../models/model.crud.js';

export async function index(req, res, next) {
  try {
    const data = await findAll(); 
    if(!data){
        return res.status(404).json({message:"user not found"});
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
}



export async function showsingleuser(req, res, next) {
    const id=req.params.id;
  try {
    const data = await findById(id); 
    if(!data){
        return res.status(404).json({message:"user not found"});
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function insert(req, res, next) {
  try {
    const {datafname,datalname,dataemail}=req.body;
    if(!dataemail|| !dataemail.trim()){
        return res.status(400).json({message:"feild is required"});
    }
    const inserted = await create({fname:datafname,lname:datalname,email:dataemail}); 
    if(!inserted){
      return res.status(400).json({message:"can not inter data"});
    }else{
      res.json(inserted);
    }
  } catch (err) {
    next(err);
  }
}


export async function update(req, res,next) {
  try {
    const  id  = req.params.id;
   const {datafname,datalname,dataemail}=req.body;

    const inserted = await updateRecord({id:id,fname:datafname,lname:datalname,email:dataemail}); 

    if (inserted.affectedRows === 0) {
      return res.status(404).json({ message: `Record with ID ${id} not found` });
    }

    res.status(200).json({ message: 'Record updated successfully' });
  } catch (error) {
   next(error);
  }
};




export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const result = await deleteRecord({ id });
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: `Record with ID ${id} not found` });
    }
    res.status(200).json({ message: `Record with ID ${id} has been deleted` });
  } catch (err) {
     next(err);
  }
}


