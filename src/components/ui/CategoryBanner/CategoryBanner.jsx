'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

// ✨ Enhanced animation variants
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3,
        },
    },
};

const textVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const imageVariant = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const sparkleVariant = {
    animate: {
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const floatingVariant = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const CategoryBanner = ({ imageSrc, bannerContent }) => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* 🌟 Animated Background with Multiple Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.1),transparent_50%)]" />
            </div>

            {/* ✨ Floating Sparkles */}
            <motion.div
                className="absolute top-20 left-20 text-yellow-400"
                variants={sparkleVariant}
                animate="animate"
            >
                <Sparkles className="w-6 h-6" />
            </motion.div>
            <motion.div
                className="absolute top-40 right-32 text-pink-400"
                variants={sparkleVariant}
                animate="animate"
                style={{ animationDelay: '1s' }}
            >
                <Star className="w-4 h-4" />
            </motion.div>
            <motion.div
                className="absolute bottom-32 left-40 text-blue-400"
                variants={sparkleVariant}
                animate="animate"
                style={{ animationDelay: '2s' }}
            >
                <Sparkles className="w-5 h-5" />
            </motion.div>

            {/* 📦 Main Content Container */}
            <motion.div
                className="relative z-10 flex items-center justify-center min-h-screen py-20 px-6 sm:px-10 lg:px-20"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-16">

                    {/* 📝 Enhanced Text Section */}
                    <motion.div
                        className="flex-1 min-w-[320px] text-center lg:text-left space-y-8"
                        variants={textVariant}
                    >
                        {/* Subtitle with animated underline */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Sparkles className="w-4 h-4 text-purple-500" />
                            <span className="text-sm font-medium text-gray-700">New Collection</span>
                        </motion.div>

                        {/* Main Heading with Gradient Text */}
                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
                            initial={{ backgroundPosition: "0% 50%" }}
                            animate={{ backgroundPosition: "100% 50%" }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            style={{
                                background: "linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                                backgroundSize: "300% 300%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {bannerContent}
                        </motion.h1>

                        {/* Enhanced Description */}
                        <motion.p
                            className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            Discover our meticulously curated collection designed to elevate your style and inspire your journey.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        >
                            <motion.button
                                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Collection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>

                            <motion.button
                                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-full border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* 🖼️ Enhanced Image Section */}
                    <motion.div
                        className="flex-1 w-full max-w-md mx-auto lg:max-w-lg relative"
                        variants={imageVariant}
                    >
                        {/* Floating Image Container */}
                        <motion.div
                            className="relative"
                            variants={floatingVariant}
                            animate="animate"
                        >
                            {/* Glow Effect Behind Image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-3xl blur-3xl scale-110 animate-pulse" />

                            {/* Main Image without Frame */}
                            <div className="relative">
                                <motion.div
                                    className="relative overflow-hidden rounded-3xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Image
                                        src={imageSrc}
                                        alt="Category Banner"
                                        width={600}
                                        height={700}
                                        priority
                                        className="rounded-3xl object-cover w-full h-auto"
                                    />
                                    {/* Image Overlay with Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>
                            </div>

                            {/* Decorative Elements Around Image */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 blur-xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.6, 0.8, 0.6],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 blur-xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* 🌊 Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-16 fill-white/50"
                >
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                    />
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                    />
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
                </svg>
            </div>
        </div>
    );
};

export default CategoryBanner;