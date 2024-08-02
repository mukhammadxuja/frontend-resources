import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDropzone } from 'react-dropzone';
import { db, storage } from '../../firebase/config';
import { menus } from '../../data/menu2';

const AddResource = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      label: '',
      description: '',
      tab: '',
      link: '',
      hashtags: '',
    },
  });
  const [imageFile, setImageFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setImageFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
  });

  console.log(Date.now());

  const onSubmit = async (data) => {
    try {
      let imageUrl = '';

      // Upload image if a file is selected
      if (imageFile) {
        const storageRef = ref(storage, `images/${data.tab}/${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      const dataTab = data.tab.toLowerCase();

      const docRef = await addDoc(collection(db, `resources/All/items`), {
        ...data,
        image: imageUrl,
        hashtags: [
          dataTab,
          ...data.hashtags.split(',').map((tag) => tag.trim()),
        ],
        date: Date.now(),
        likes: 0,
        show: true,
      });

      await updateDoc(docRef, {
        id: docRef.id,
      });

      alert('Resource added successfully!');
      reset(); // Clear the form after successful submission
      setImageFile(null); // Clear the selected file
    } catch (error) {
      console.error('Error adding resource: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
      <div
        {...getRootProps()}
        className="w-full cursor-pointer rounded-lg border-2 border-dashed border-green-400 p-4"
      >
        <input {...getInputProps()} />
        <p className="text-center">
          {imageFile
            ? imageFile.name
            : 'Drag & drop an image here, or click to select one'}
        </p>
      </div>

      <div className="mt-4">
        <label>Label</label>
        <input
          className="input"
          placeholder="Label"
          {...register('label', { required: 'Label is required' })}
        />
        {errors.label && (
          <p className="text-xs text-red-500">{errors.label.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label>Description</label>
        <textarea
          className="input"
          placeholder="Description"
          {...register('description', { required: 'Description is required' })}
        />
        {errors.description && (
          <p className="text-xs text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label>Tab</label>
        <select
          className="input"
          placeholder="Select Tab"
          {...register('tab', { required: 'Tab is required' })}
        >
          {menus.map((menu) => (
            <option key={menu.title} value={menu.title}>
              <span style={{ color: menu?.color }}>{menu?.icon}</span>
              <span>{menu.title}</span>
            </option>
          ))}
        </select>
        {errors.tab && (
          <p className="text-xs text-red-500">{errors.tab.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label>Link</label>
        <input
          className="input"
          placeholder="Link"
          {...register('link', { required: 'Link is required' })}
        />
        {errors.link && (
          <p className="text-xs text-red-500">{errors.link.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label>Hashtags (comma separated)</label>
        <input
          className="input"
          placeholder="Hashtags"
          {...register('hashtags')}
        />
        {errors.hashtags && (
          <p className="text-xs text-red-500">{errors.hashtags.message}</p>
        )}
      </div>

      <button className="btn_primary mt-4" type="submit">
        Add Resource
      </button>
    </form>
  );
};

export default AddResource;
