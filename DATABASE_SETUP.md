# Supabase Database Setup Guide

This guide will help you set up the Supabase database for the EV Charging Station website.

## Prerequisites

1. Create a free account at [Supabase](https://supabase.com)
2. Create a new project in Supabase

## Step 1: Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Click on "Settings" → "API"
3. Copy your **Project URL** and **anon/public key**
4. Create a `.env.local` file in your project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Step 2: Create the Database Table

Go to the SQL Editor in your Supabase dashboard and run the following SQL:

```sql
-- Create charging_stations table
CREATE TABLE charging_stations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  website TEXT,
  address TEXT NOT NULL,
  country_code TEXT DEFAULT 'US',
  rating DECIMAL(3, 2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  lat DECIMAL(10, 8),
  lon DECIMAL(11, 8),
  telephone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better search performance
CREATE INDEX idx_address ON charging_stations(address);
CREATE INDEX idx_rating ON charging_stations(rating);
CREATE INDEX idx_address_rating ON charging_stations(address, rating);

-- Enable Row Level Security
ALTER TABLE charging_stations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" 
ON charging_stations FOR SELECT 
TO public 
USING (true);
```

## Step 3: Import Your CSV Data

If you have the EVChargeStations_USA.csv file:

1. Go to the "Table Editor" in Supabase
2. Select the `charging_stations` table
3. Click "Insert" → "Import from CSV"
4. Upload your CSV file

### CSV Column Mapping

Your CSV columns should map directly to the database columns:
- name → name
- website → website
- address → address
- country_code → country_code
- rating → rating
- total_reviews → total_reviews
- lat → lat
- lon → lon
- telephone → telephone

## Step 4: Add Sample Data (Optional)

If you don't have CSV data, you can add sample data for testing:

```sql
INSERT INTO charging_stations (
  name, website, address, country_code, rating, total_reviews, lat, lon, telephone
) VALUES
(
  'Downtown Charging Hub',
  'https://chargepoint.com',
  '123 Main Street, San Francisco, CA 94102',
  'US',
  4.8,
  156,
  37.7749,
  -122.4194,
  '+1-415-555-0100'
),
(
  'Airport EV Station',
  'https://tesla.com/supercharger',
  '456 Airport Blvd, Los Angeles, CA 90045',
  'US',
  4.6,
  203,
  33.9416,
  -118.4085,
  '+1-310-555-0200'
),
(
  'Highway 101 Charging',
  'https://evgo.com',
  '789 Highway 101, San Jose, CA 95110',
  'US',
  4.3,
  89,
  37.3382,
  -121.8863,
  '+1-408-555-0300'
),
(
  'City Center Power Station',
  'https://electrifyamerica.com',
  '321 Oak Avenue, Seattle, WA 98101',
  'US',
  4.7,
  142,
  47.6062,
  -122.3321,
  '+1-206-555-0400'
),
(
  'Mall Parking EV Chargers',
  'https://blinkcharging.com',
  '555 Shopping Way, Portland, OR 97201',
  'US',
  4.5,
  67,
  45.5152,
  -122.6784,
  '+1-503-555-0500'
);
```

## Step 5: Test Your Connection

1. Run your Next.js development server: `npm run dev`
2. Navigate to the search section
3. Try searching for a location (e.g., "California", "San Francisco", or any address)
4. Verify that charging stations appear in the results

## Troubleshooting

### No results appearing?
- Check that your `.env.local` file contains the correct Supabase credentials
- Verify that Row Level Security policies allow public read access
- Check the browser console for any error messages

### Connection errors?
- Ensure your Supabase project URL starts with `https://`
- Verify the anon key is copied correctly without extra spaces
- Make sure the table name is exactly `charging_stations`

## Next Steps

- Import your full CSV dataset
- Add more sample data for testing
- Customize the search functionality
- Add additional filters (power output, connector types, etc.)
