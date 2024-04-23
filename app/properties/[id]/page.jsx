'use Client'
import { useParams } from 'next/navigation'
import { fetchProperty } from '@/utils/requests'
import { useEffect } from 'react';

const propertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property)
      } catch (error){
        console.log('Error fetching property:', error)
      } finally{
        setLoading(false);
      }
    }

    if(property === null){
      fetchPropertyData();
    }
  }, [id, property]);

  return (
    <div>propertyPage</div>
  )
}

export default propertyPage