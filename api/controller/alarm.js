const _ = require('lodash');
const error_types = require('./error_types');
const Alarm = require ('../model/alarm');

module.exports = {
    newAlarm:(req,res)=>{
        let alarm = new Alarm({
            createdBy: req.user._id,
            name: req.body.name,
            type: req.body.type,
            done: false,
            activated: true
        });
        alarm.save()
                .then(e => e.populate({path: 'createdBy', select: ['email', 'name']}).execPopulate())
                .then(e => res.status(201).json(e))
                .catch(error => res.send(400).json(err.message));
    },
    editAlarm: (req, res) => {
        const _id = req.params.id;
        Alarm.updateOne({ _id }, {
            done: req.body.done,
            activated: req.body.activated
            })
            .exec(function(err, alarm) {
                if (err) res.send(404).json(err.message);
                res.status(201).json({
                    alarm: alarm
                })
            })
    },
    deleteAlarm:(req, res) =>{
        Alarm.findByIdAndDelete(req.params.id, (error, alarm) => {
            if (error) { res.send(404).json(err.message); };
            res.status(204).json(alarm)
        })
    },
    getAll: async(req, res) => {
        let result = null;
        result = await Alarm.find()
            .populate({ path: 'type', select: ['description'] })
            .populate({ path: 'createdBy', select: ['email', 'fullname'] })
            .exec();
        res.status(200).json(result);
        if (result == null) {
            res.send(404).json(err.message);
        }
    },
    getById: async(req, res) => {
        let result = null;
        const _id = req.params.id;
        Alarm.findById(_id)
            .populate({ path: 'type', select: ['description'] })
            .populate({ path: 'createdBy', select: ['email', 'fullname'] })
            .exec(function(err, alarm) {
                if (err) res.status(404).json(err.message);
                res.status(200).json({
                    alarm: alarm
                });
            });
    },
    getByUserId: async(req, res) => {
        console.log(req.user._id);
        try {
            
        
            let result = null;
            result = await Alarm.find({createdBy: req.user._id}).exec();
            res.status(200).json(result);
        }catch (error) {
            res.status(500).json(error.message);
        }
    }
}