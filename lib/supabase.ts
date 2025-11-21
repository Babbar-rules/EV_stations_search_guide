import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ChargingStation {
    id: number;
    name: string;
    website: string | null;
    address: string;
    country_code: string;
    rating: number;
    total_reviews: number;
    lat: number;
    lon: number;
    telephone: string | null;
    created_at: string;
}

export async function searchChargingStations(
    searchText?: string,
    minRating?: number
): Promise<ChargingStation[]> {
    try {
        let query = supabase
            .from('charging_stations')
            .select('*')
            .order('rating', { ascending: false });

        if (searchText) {
            query = query.ilike('address', `%${searchText}%`);
        }

        if (minRating !== undefined) {
            query = query.gte('rating', minRating);
        }

        const { data, error } = await query.limit(50);

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching charging stations:', error);
        return [];
    }
}
