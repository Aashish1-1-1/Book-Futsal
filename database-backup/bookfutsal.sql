--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bookings; Type: TABLE; Schema: public; Owner: aashish
--

CREATE TABLE public.bookings (
    booking_id integer NOT NULL,
    user_id integer,
    ground_id integer,
    time_interval_id integer
);


ALTER TABLE public.bookings OWNER TO aashish;

--
-- Name: bookings_booking_id_seq; Type: SEQUENCE; Schema: public; Owner: aashish
--

CREATE SEQUENCE public.bookings_booking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bookings_booking_id_seq OWNER TO aashish;

--
-- Name: bookings_booking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aashish
--

ALTER SEQUENCE public.bookings_booking_id_seq OWNED BY public.bookings.booking_id;


--
-- Name: ground; Type: TABLE; Schema: public; Owner: aashish
--

CREATE TABLE public.ground (
    id integer NOT NULL,
    name character varying(255),
    location character varying(255),
    contact character varying(20),
    email character varying(225),
    password character varying(225),
    open time without time zone,
    close time without time zone,
    document_path character varying(225),
    verification_status boolean
);


ALTER TABLE public.ground OWNER TO aashish;

--
-- Name: ground_id_seq; Type: SEQUENCE; Schema: public; Owner: aashish
--

CREATE SEQUENCE public.ground_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ground_id_seq OWNER TO aashish;

--
-- Name: ground_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aashish
--

ALTER SEQUENCE public.ground_id_seq OWNED BY public.ground.id;


--
-- Name: timeinterval; Type: TABLE; Schema: public; Owner: aashish
--

CREATE TABLE public.timeinterval (
    time_interval_id integer NOT NULL,
    time_interval_start time without time zone,
    time_interval_end time without time zone
);


ALTER TABLE public.timeinterval OWNER TO aashish;

--
-- Name: timeinterval_time_interval_id_seq; Type: SEQUENCE; Schema: public; Owner: aashish
--

CREATE SEQUENCE public.timeinterval_time_interval_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.timeinterval_time_interval_id_seq OWNER TO aashish;

--
-- Name: timeinterval_time_interval_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aashish
--

ALTER SEQUENCE public.timeinterval_time_interval_id_seq OWNED BY public.timeinterval.time_interval_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: aashish
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    name character varying(255) NOT NULL,
    contact character varying(15),
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    document_image_path character varying(255)
);


ALTER TABLE public.users OWNER TO aashish;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: aashish
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO aashish;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aashish
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: bookings booking_id; Type: DEFAULT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.bookings ALTER COLUMN booking_id SET DEFAULT nextval('public.bookings_booking_id_seq'::regclass);


--
-- Name: ground id; Type: DEFAULT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.ground ALTER COLUMN id SET DEFAULT nextval('public.ground_id_seq'::regclass);


--
-- Name: timeinterval time_interval_id; Type: DEFAULT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.timeinterval ALTER COLUMN time_interval_id SET DEFAULT nextval('public.timeinterval_time_interval_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: aashish
--

COPY public.bookings (booking_id, user_id, ground_id, time_interval_id) FROM stdin;
\.


--
-- Data for Name: ground; Type: TABLE DATA; Schema: public; Owner: aashish
--

COPY public.ground (id, name, location, contact, email, password, open, close, document_path, verification_status) FROM stdin;
1	SR futsal	dhulikhel	9867742787	aa03228322@student.ku.edu.np	dfasfds	10:42:00	10:41:00	assets/groundSR futsalalbert.png	f
2	KU futsal	Budol	9867742787	kufut123@gmail.com	kutwhoni	10:23:00	10:24:00	assets/groundKU futsalalbert.png	f
\.


--
-- Data for Name: timeinterval; Type: TABLE DATA; Schema: public; Owner: aashish
--

COPY public.timeinterval (time_interval_id, time_interval_start, time_interval_end) FROM stdin;
1	01:00:00	02:00:00
2	02:00:00	03:00:00
3	03:00:00	04:00:00
4	04:00:00	05:00:00
5	05:00:00	06:00:00
6	06:00:00	07:00:00
7	07:00:00	08:00:00
8	08:00:00	09:00:00
9	09:00:00	10:00:00
10	10:00:00	11:00:00
11	11:00:00	12:00:00
12	12:00:00	13:00:00
13	13:00:00	14:00:00
14	14:00:00	15:00:00
15	15:00:00	16:00:00
16	16:00:00	17:00:00
17	17:00:00	18:00:00
18	18:00:00	19:00:00
19	19:00:00	20:00:00
20	20:00:00	21:00:00
21	21:00:00	22:00:00
22	22:00:00	23:00:00
23	23:00:00	24:00:00
24	24:00:00	01:00:00
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: aashish
--

COPY public.users (user_id, name, contact, email, password, document_image_path) FROM stdin;
1	Aashish	9867742787	aashish@gmail.com	Aashish@123#	\N
\.


--
-- Name: bookings_booking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aashish
--

SELECT pg_catalog.setval('public.bookings_booking_id_seq', 1, false);


--
-- Name: ground_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aashish
--

SELECT pg_catalog.setval('public.ground_id_seq', 3, false);


--
-- Name: timeinterval_time_interval_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aashish
--

SELECT pg_catalog.setval('public.timeinterval_time_interval_id_seq', 24, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aashish
--

SELECT pg_catalog.setval('public.users_user_id_seq', 2, false);


--
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (booking_id);


--
-- Name: ground ground_pkey; Type: CONSTRAINT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.ground
    ADD CONSTRAINT ground_pkey PRIMARY KEY (id);


--
-- Name: timeinterval timeinterval_pkey; Type: CONSTRAINT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.timeinterval
    ADD CONSTRAINT timeinterval_pkey PRIMARY KEY (time_interval_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: unique_combination_idx; Type: INDEX; Schema: public; Owner: aashish
--

CREATE UNIQUE INDEX unique_combination_idx ON public.bookings USING btree (ground_id, time_interval_id);


--
-- Name: bookings bookings_ground_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_ground_id_fkey FOREIGN KEY (ground_id) REFERENCES public.ground(id);


--
-- Name: bookings bookings_time_interval_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_time_interval_id_fkey FOREIGN KEY (time_interval_id) REFERENCES public.timeinterval(time_interval_id);


--
-- Name: bookings bookings_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aashish
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

