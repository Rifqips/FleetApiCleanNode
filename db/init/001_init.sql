-- Pastikan superuser 'postgres' ada
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname='postgres') THEN
    CREATE ROLE postgres SUPERUSER LOGIN PASSWORD 'secret123';
  ELSE
    ALTER ROLE postgres WITH SUPERUSER LOGIN PASSWORD 'secret123';
  END IF;
END $$;

-- Pastikan user aplikasi 'fleet' ada
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname='fleet') THEN
    CREATE ROLE fleet LOGIN PASSWORD 'secret123';
  ELSE
    ALTER ROLE fleet WITH LOGIN PASSWORD 'secret123';
  END IF;
END $$;

-- *** PENTING: CREATE DATABASE harus DI LUAR DO ***
-- Buat DB 'fleetdb' jika belum ada dan set owner ke 'fleet'
CREATE DATABASE fleetdb OWNER fleet;
