import React from "react";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Import your Firebase project credentials JSON file
import firebaseConfig from "./skin-lesios-react-app-firebase-adminsdk.json";

import "./LandingPage.css";

type Image = {
  id: string;
  url: string;
};
// Initialize Firebase with the project credentials

const ImageUploader = () => {
  const app = initializeApp({
    firebaseConfig,
    storageBucket: "skin-lesios-react-app.appspot.com",
  });

  // Access the Firebase Storage instance
  const storage = getStorage(app);
  const storageRef = ref(storage); // Replace "images" with the desired path in your storage bucket

  const [images, setImages] = useState<Image[]>([]);

  // const handleUpload = async () => {
  //   if (images.length > 0) {
  //     const image = images[0];
  //     const response = await fetch(image.url);
  //     const data = await response.blob();

  //     const fileRef = ref(storageRef, `${image.id}.${data.type.split("/")[1]}`);
  //     await uploadBytes(fileRef, data); // Upload the image file to the storage bucket

  //     console.log("Image uploaded successfully!");
  //   }
  // };

  // const handleRequest = async () => {
  //   const url =
  //     "https://europe-west1-vast-bounty-389707.cloudfunctions.net/function-1";

  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       body: "John",
  //     });

  //     if (response.ok) {
  //       const responseText = await response.text();
  //       console.log(responseText);
  //     } else {
  //       console.log("Request failed with status code:", response.status);
  //     }
  //   } catch (error) {
  //     console.log("Request failed with error:", error);
  //   }
  // };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const id = Date.now().toString();
      const url = e.target?.result as string;
      setImages([{ id, url }]);
    };
    reader.readAsDataURL(file);
  };

  const makeHttpRequest = async (selectedImage) => {
    const { id, url } = selectedImage;

    try {
      const response = await fetch(url);
      const imageBlob = await response.blob();

      const arrayBuffer = await new Response(imageBlob).arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      console.log(response, imageBlob, arrayBuffer, uint8Array);

      // Convert the Uint8Array to a binary string
      let binaryString = "";
      uint8Array.forEach((byte) => {
        binaryString += String.fromCharCode(byte);
      });

      // Use the binaryString as needed (e.g., send it to the cloud function)
      console.log(binaryString);

      // Set the Cloud Function URL
      const cloudFunctionUrl =
        "https://europe-west1-vast-bounty-389707.cloudfunctions.net/make_predictions_skin_lesions";

      // Make the HTTP POST request with appropriate headers
      fetch(cloudFunctionUrl, {
        method: "POST",
        body: binaryString,
        // headers: {
        //   "Content-Type": "application/octet-stream",
        // },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              "Request failed with status code " + response.status
            );
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleButtonClick = () => {
    if (images.length > 0) {
      const selectedImage = images[0];
      console.log(selectedImage); // Assuming you only handle the first selected image
      // makeHttpRequest(selectedImage);
    } else {
      console.error("No image selected.");
    }
  };

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const id = Date.now().toString();
        const url = e.target?.result as string;
        setImages([{ id, url }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (id: string) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div className="flex m-12">
      <div
        className="w-full p-2 border-2 border-gray-300 rounded-md shadow-md fade-in-uploader"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {images.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="flex flex-col items-center">
              <FiUpload className="w-8 h-8 mb-2" />
              <p>Drag and drop an image here</p>
              <p>or</p>
              <label
                htmlFor="file-input"
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
              >
                Select Image
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleSelectImage}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {images.map((image) => (
              <div key={image.id} className="flex flex-col h-full">
                <div className="flex items-center justify-center h-full rounded-md">
                  <img
                    className="h-full object-contain rounded-md shadow-md"
                    src={image.url}
                    alt="Uploaded"
                  />
                </div>
                <div className="flex flex-row">
                  <button
                    className="flex-1 p-2 my-2 mx-2 rounded-xl bg-red-500 hover:bg-red-600 hover:text-white text-white shadow-md transition-transform duration-200 active:scale-90"
                    onClick={() => handleDeleteImage(image.id)}
                  >
                    Clear Image
                  </button>
                  <button className="flex-1 p-2 my-2 mx-2 rounded-xl bg-blue-500 hover:bg-blue-600 hover:text-white text-white shadow-md transition-transform duration-200 active:scale-90">
                    Crop Image
                  </button>
                  <button
                    className="flex-1 p-2 my-2 mx-2 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white text-white shadow-md transition-transform duration-200 active:scale-90"
                    onClick={handleButtonClick}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full h-96 p-2 bg-slate-200 border-2 border-gray-300 rounded-md shadow-md fade-in-uploader">
        Results
      </div>
    </div>
  );
};

export default ImageUploader;
