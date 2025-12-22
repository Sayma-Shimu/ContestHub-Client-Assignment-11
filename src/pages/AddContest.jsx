import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import useRole from '../hooks/useRole';

const AddContest = () => {
    const user = useRole();
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        if (!user?.email) return toast.error("User not found!");
        
        setLoading(true);
        const contestData = {
            name: data.name,
            image: data.image,
            description: data.description,
            taskInstruction: data.taskInstruction,
            contestType: data.contestType,
            price: data.price,
            prizeMoney: data.prizeMoney,
            deadline: data.deadline.toISOString().split('T')[0],
            creatorEmail: user?.email,
        };

        try {
            const res = await axios.post('https://contesthub-steel.vercel.app/contests', contestData);
            if (res.data.insertedId) {
                toast.success("Contest Added Successfully!");
                reset();
            }
        } catch (error) {
            toast.error("Error adding contest");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="card w-full max-w-4xl bg-white shadow-xl border border-gray-100">
                <div className="card-body">
                    <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6 uppercase tracking-tight">Add New Contest</h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control md:col-span-2">
                            <label className="label font-bold text-gray-700">Contest Name</label>
                            <input {...register("name", { required: true })} className="input input-bordered focus:input-primary" placeholder="Enter contest title" />
                        </div>

                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Image URL</label>
                            <input {...register("image", { required: true })} className="input input-bordered" placeholder="https://example.com/logo.jpg" />
                        </div>

                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Contest Type</label>
                            <select {...register("contestType", { required: true })} className="select select-bordered">
                                <option value="Image Design">Image Design</option>
                                <option value="Article Writing">Article Writing</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Digital Advertisement">Digital Advertisement</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Entry Price ($)</label>
                            <input type="number" {...register("price", { required: true })} className="input input-bordered" placeholder="200" />
                        </div>

                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Prize Money ($)</label>
                            <input type="number" {...register("prizeMoney", { required: true })} className="input input-bordered" placeholder="5000" />
                        </div>

                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Deadline</label>
                            <Controller
                                control={control}
                                name="deadline"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <DatePicker
                                        className="input input-bordered w-full"
                                        onChange={(date) => field.onChange(date)}
                                        selected={field.value}
                                        minDate={new Date()}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Click to select date"
                                    />
                                )}
                            />
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label font-bold text-gray-700">Description</label>
                            <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-20" placeholder="Brief details about the contest"></textarea>
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label font-bold text-gray-700">Task Instruction</label>
                            <textarea {...register("taskInstruction", { required: true })} className="textarea textarea-bordered h-20" placeholder="Instructions for participants"></textarea>
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <button type="submit" disabled={loading} className="btn btn-primary w-full text-white font-bold text-lg">
                                {loading ? "Creating..." : "Add Contest"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContest;