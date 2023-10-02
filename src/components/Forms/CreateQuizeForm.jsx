import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import CustomInputText from '../CustomInputs/CustomInputText';
import { quizeRules } from '../../constants';
import thunks from '../../store/services/quizesCard/thunks';
import CreateQuizeModal from '../modal/CreatedQuizModal';

export default function CreateQuizeForm() {
  const { control, handleSubmit, getValues } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    favourite: false,
    title: '',
    description: '',
    img: '',
  });
  const createQuie = () => {
    const values = getValues();
    const updatedFormData = {
      ...formData,
      title: values.title,
      description: values.description,
      img: values.img,
    };
    setFormData(updatedFormData);
    return updatedFormData;
  };

  const onSubmit = async () => {
    try {
      const updatedFormData = createQuie();
      await dispatch(thunks.postQuize(updatedFormData));
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <CustomInputText
      control={control}
      name='title'
      rules={quizeRules.title}
      label='Quize'
    />
    <CustomInputText
      control={control}
      name='description'
      rules={quizeRules.description}
      label='Description'
      multiline
      rows={4}
    />
    <CustomInputText
      control={control}
      name='img'
      rules={quizeRules.img}
      label='IMG URL'
    />

    <Button onClick={handleSubmit(onSubmit)}> Create Quize </Button>
    {isModalOpen && (
        <CreateQuizeModal
          onClose={handleCloseModal}
        />
    )}

    </div>
  );
}
