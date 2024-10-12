'use client';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Settings, BarChart } from 'lucide-react'

const Dropdown = ({ label, items, icon, isOpen, onToggle }) => {
  return (
    (<div className="relative flex gap-10">
      <button
        onClick={onToggle}
        className="w-full py-4 px-4 text-left bg-[#1b1b1b] border border-gray-300 rounded-md shadow-sm flex justify-between items-center text-red-500 hover:bg-gray-50 transition-colors duration-200">
        <span className="flex items-center">
          {icon}
          <span className="ml-4">{label}</span>
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 50 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>)
  );
}

export function DropdownButtons() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    (<div className="flex  flex-row gap-4 max-w-2xl mx-auto p-6">
      <Dropdown
        label="Soluciones a medida"
        items={['Desarrollo de software', 'Consultoría IT', 'Integración de sistemas']}
        icon={<Settings className="w-5 h-5" />}
        isOpen={openDropdown === 'solutions'}
        onToggle={() => handleToggle('solutions')} />
      <Dropdown
        label="Resultados"
        items={['Aumento de eficiencia', 'Reducción de costos', 'Mejora en la toma de decisiones']}
        icon={<BarChart className="w-5 h-5" />}
        isOpen={openDropdown === 'results'}
        onToggle={() => handleToggle('results')} />
    </div>)
  );
}