// Arquivo: App.js

import React from 'react';
// StyleSheet não é mais necessário aqui
import {
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView
} from 'react-native';

// Importe seus estilos do arquivo separado
import styles from './styles'; // Você pode omitir o .js

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* --- SEÇÃO CABEÇALHO --- */}
        <View style={styles.headerContainer}>
          <Image
            style={styles.profileImage}
            source={require('./assets/curriculoimg.jpeg')} // Certifique-se que o nome do arquivo está correto
          />
          <Text style={styles.name}>VICTOR SETTE COUTO DE MELO</Text>
          <Text style={styles.subTitle}>Desenvolvedor de Software | Analista de T.i</Text>
          <Text style={styles.contactInfo}>Olinda, PE | (81) 99535-8795</Text>
          <Text style={styles.contactInfo}>victorsette84@gmail.com</Text>
          <Text style={styles.contactInfo}>linkedin.com/in/victor-sette-411036299</Text>
        </View>

        {/* --- SEÇÃO OBJETIVOS --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivos</Text>
          <Text style={styles.bodyText}>
            Busco uma oportunidade para aplicar e expandir meus conhecimentos em desenvolvimento de software e suporte técnico. Tenho como objetivo aprimorar continuamente minhas habilidades de comunicação e aprender novas ferramentas para oferecer excelência no Suporte ao Usuário, ao mesmo tempo em que contribuo com soluções eficientes em instalação, configuração e manutenção de sistemas e redes para o sucesso da equipe e dos projetos.
          </Text>
        </View>

        {/* --- SEÇÃO FORMAÇÃO ACADÊMICA --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          <Text style={styles.itemTitle}>Graduação em Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.itemSubTitle}>Faculdade SENAC-PE | Cursando</Text>
          
          <Text style={styles.itemTitle}>Ensino Médio Integrado ao Técnico de Informática</Text>
          <Text style={styles.itemSubTitle}>SENAC-RECIFE | Concluído em 2024</Text>
        </View>

        {/* --- SEÇÃO EXPERIÊNCIA PROFISSIONAL --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          <Text style={styles.itemTitle}>Estagiário de Suporte de T.I</Text>
          <Text style={styles.itemSubTitle}>SENAC-RECIFE</Text>
          <Text style={styles.bulletPoint}>• Responsável pela instalação, configuração e manutenção de computadores e sistemas operacionais (Windows/Linux).</Text>
          <Text style={styles.bulletPoint}>• Suporte técnico a usuários para garantir o pleno funcionamento de equipamentos e softwares.</Text>
          <Text style={styles.bulletPoint}>• Planejamento, instalação e configuração de equipamentos de redes locais, seguindo as normas e projetos técnicos.</Text>
          <Text style={styles.bulletPoint}>• Implementação de políticas de segurança e monitoramento da rede para garantir a estabilidade e proteção do ambiente.</Text>
          <Text style={styles.bulletPoint}>• Diagnóstico e resolução de problemas de conectividade utilizando ferramentas específicas.</Text>
          <Text style={styles.bulletPoint}>• Desenvolvimento e codificação de funcionalidades para aplicações web, seguindo as melhores práticas da linguagem de programação.</Text>
          <Text style={styles.bulletPoint}>• Configuração do ambiente, compilação e depuração de código para garantir a qualidade e o funcionamento do software.</Text>
          <Text style={styles.bulletPoint}>• Integração do código com bancos de dados e elaboração da documentação técnica do projeto.</Text>
        </View>

        {/* --- SEÇÃO HABILIDADES TÉCNICAS --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
          <Text style={styles.bodyText}><Text style={styles.bold}>Sistemas Operacionais:</Text> Windows (Server, 7, 10, 11) e Linux.</Text>
          <Text style={styles.bodyText}><Text style={styles.bold}>Linguagens e Ferramentas:</Text> HTML, CSS, JavaScript, Python, MySQL, Git e GitHub.</Text>
          <Text style={styles.bodyText}><Text style={styles.bold}>Redes e Segurança:</Text> Redes de Computadores, Suporte ao Usuário, Manutenção de Computadores, Endpoint Security e Cybersecurity.</Text>
          <Text style={styles.bodyText}><Text style={styles.bold}>Produtividade:</Text> Pacote Office completo.</Text>
        </View>

        {/* --- SEÇÃO CURSOS TÉCNICOS --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cursos Técnicos</Text>
          <Text style={styles.itemTitle}>Assistente de Desenvolvimento de Aplicativos Computacionais (620h)</Text>
          <Text style={styles.itemSubTitle}>SENAC, 2024</Text>
          <Text style={styles.itemTitle}>Assistente de Operação de Redes e Computadores (308h)</Text>
          <Text style={styles.itemSubTitle}>SENAC, 2023</Text>
          <Text style={styles.itemTitle}>Suporte e Manutenção de Computadores (272h)</Text>
          <Text style={styles.itemSubTitle}>SENAC, 2022</Text>
        </View>

        {/* --- SEÇÃO CURSOS COMPLEMENTARES --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cursos Complementares</Text>
          <Text style={styles.bodyText}>• O Básico de Git e GitHub - Rocketseat, 2025</Text>
          <Text style={styles.bodyText}>• Desbloqueando a Programação - Rocketseat, 2025</Text>
          <Text style={styles.bodyText}>• Introduction to Cybersecurity - CISCO, 2024</Text>
          <Text style={styles.bodyText}>• Endpoint Security - CISCO, 2024</Text>
          <Text style={styles.bodyText}>• Pensamento Computacional - SENAC, 2022</Text>
        </View>

        {/* --- SEÇÃO COMPETÊNCIAS --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Competências Comportamentais</Text>
          <Text style={styles.bodyText}>
            Trabalho em Equipe, Comunicação, Resolução Criativa de Problemas, Metodologias Ágeis, Liderança e Gestão de Pessoas, Flexibilidade e Adaptabilidade.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}