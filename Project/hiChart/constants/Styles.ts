import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
      color: '#333',
    },
    subheader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',
    },
    chartContainer: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      alignItems: 'center',
    },
    instructionsContainer: {
      marginBottom: 16,
    },
    instructions: {
      fontSize: 16,
      fontStyle: 'italic',
      color: '#555',
      textAlign: 'center',
    },
    textContainer: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    reportText: {
      fontSize: 16,
      lineHeight: 24,
      color: '#333',
    },
    selectionContainer: {
      backgroundColor: '#e3f2fd',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    selectionHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    selectionText: {
      fontSize: 16,
      fontStyle: 'italic',
    },
    dataTableContainer: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    tableTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    tableHeader: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingBottom: 8,
      marginBottom: 8,
    },
    tableHeaderCell: {
      flex: 1,
      fontWeight: 'bold',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 4,
    },
    tableCell: {
      flex: 1,
    },
    footer: {
      marginTop: 16,
      marginBottom: 32,
    },
    footerText: {
      fontSize: 14,
      color: '#666',
      textAlign: 'center',
      fontStyle: 'italic',
    },
    highlightedRow: {
        backgroundColor: '#f98b69', // soft yellow
    },
  });