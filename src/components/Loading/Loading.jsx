import * as React from "react";
import { motion } from "framer-motion";
import { View } from "react-native";


export default function Loading() {
    const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};
    
    return (
    <View style={{
    width: '150px',
    height: '150px',
    display: 'flex',
    placeContent: 'center',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '30px'
  }}>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
        style={{
            width: '56%',
            overflow: 'visible',
            stroke: '#fff',
            strokeWidth: 2,
            strokeLinejoin: 'round',
            strokeLinecap: 'round'
      }}
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  </View>
)};
