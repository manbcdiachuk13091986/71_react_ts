import { useState, useEffect } from "react";
import axios from "axios";
import type { CatImage} from "./types" 
import { Lesson11Wrapper, SpinnerContainer,
  Spinner,
  ErrorText,
  ImageStyle,
  ButtonContainer,
  ButtonStyle,
  SpinnerKeyframes,} from "./styles"
 


function Lesson11() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchAnimalImage = async () => {
    setImageUrl(null);
    setError(undefined);
    setIsLoading(true);

    try {
      const result = await axios.get<CatImage[]>("https://api.thecatapi.com/v1/images/search");
      setImageUrl(result.data[0].url);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  
  useEffect(() => {
    fetchAnimalImage();
  }, []);

  return (
    <div style={Lesson11Wrapper}>
      
      <style>{SpinnerKeyframes}</style>

      <h2>Lesson 11: Animal Images</h2>

      {isLoading && (
        <div style={SpinnerContainer}>
          <div style={Spinner}></div>
        </div>
      )}

      {error && <p style={ErrorText}>❌ {error}</p>}

      {imageUrl && !isLoading && <img src={imageUrl} alt="Animal" style={ImageStyle} />}

      <div style={ButtonContainer}>
        <button
          onClick={fetchAnimalImage}
          style={{
            ...ButtonStyle,
            ...(isLoading ? { opacity: 0.6, cursor: "not-allowed" } : {}),
          }}
          disabled={isLoading}
        >
          GET MORE IMAGES
        </button>
      </div>
    </div>
  );
}

export default Lesson11;
