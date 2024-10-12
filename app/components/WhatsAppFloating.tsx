'use client'
import { useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export function WhatsAppFloating() {
    const [isDark, setisDark] = useState(false);
    useEffect(() => {
        const checkTheme = () => {
          const isDarkMode = document.documentElement.classList.contains('dark');
          setisDark(isDarkMode ? true : false)
        };
    
        // Verificar o tema inicial
        checkTheme();
    
        // Observar mudanças na classe "dark" no HTML
        const observer = new MutationObserver(() => {
          checkTheme();
        });
    
        // Observar mudanças nos atributos do elemento <html>
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class'],
        });
    
        return () => {
          observer.disconnect(); // Limpar o observador quando o componente desmontar
        };
      }, []);
  return (
    <div style={{bottom: '4rem'}}>

    <FloatingWhatsApp
        phoneNumber='+5574999467851'
        accountName='Weri Oliveira'
        statusMessage="Responde Rápido"
        chatMessage='Olá, como posso ajudar?'
        placeholder="Escreva uma mensagem"
        allowEsc={true}
        darkMode={isDark}
        buttonStyle={{bottom: '4rem', right: '0.5rem'}}
        />
        </div>
  )
}