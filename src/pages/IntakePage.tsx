import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';

export default function IntakePage() {
  const navigate = useNavigate();

  const handleSubmit = (offering: string, need: string) => {
    // In a real app, this would make an API call
    console.log('Submitted:', { offering, need });
    navigate('/welcome');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Join The Alliance</h1>
        <p className="text-gray-400">
          Share your expertise and needs with our community. We'll help you find
          the perfect matches to grow together.
        </p>
      </div>

      <InputForm onSubmit={handleSubmit} />
    </div>
  );
}