import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Button } from 'react-native';
import { styles } from '../constants/Styles';

const SampleData = {
    sales: [
        { quarter: "Q1", revenue: 1200, profit: 200 },
        { quarter: "Q2", revenue: 1800, profit: 350 },
        { quarter: "Q3", revenue: 1400, profit: 280 },
        { quarter: "Q4", revenue: 2200, profit: 580 },
    ],
    text: `Annual Financial Performance Report:

The company showed strong performance in Q2 with revenue reaching $1,800K, a 50% increase from Q1. However, Q3 saw a slight decline to $1,400K as market conditions tightened. The year finished exceptionally well with Q4 reaching our highest revenue point at $2,200K, representing an 83% increase over our starting point in Q1.

Profitability metrics followed a similar pattern with Q4 showing the strongest profit at $580K, more than doubling our Q1 results of just $200K. The profit growth demonstrates our improved operational efficiency through the fiscal year.`
};

export default function index() {
    const [selectedText, setSelectedText] = useState("");
    const [selectedDataPoints, setSelectedDataPoints] = useState<{ quarter: string; revenue: number; profit: number; }[]>(SampleData.sales);
    const textRef = useRef(null);
    const [highlightedData, setHighlightedData] = useState<Set<number>>(new Set());

    // In analyzeTextSelection, use Set to add unique indices
    const analyzeTextSelection = (selection: string) => {
        const text = selection.toLowerCase();
        const newHighlightedData: Set<number> = new Set();  // Use a Set to store unique indices

        // Check for quarters mentioned
        SampleData.sales.forEach((point, index) => {
            const quarterLower = point.quarter.toLowerCase();
            if (text.includes(quarterLower)) {
                newHighlightedData.add(index);  // Add index to Set (duplicates are avoided)
            }

            // Look for revenue values
            if (text.includes(`$${point.revenue.toLocaleString()}`)) {
                newHighlightedData.add(index);  // Add index to Set (duplicates are avoided)
            }

            // Look for profit values
            if (text.includes(`$${point.profit.toLocaleString()}`)) {
                newHighlightedData.add(index);  // Add index to Set (duplicates are avoided)
            }
        });

        setHighlightedData(newHighlightedData);  // Update the highlightedData state
        setSelectedDataPoints(Array.from(newHighlightedData).map(index => SampleData.sales[index]));  // Convert Set to Array and map to data
    };

    const handleTextSelection = () => {
        if (typeof window !== 'undefined') {
            const selection = window.getSelection();
            const selectedText = selection?.toString();
            if (selectedText) {
                setSelectedText(selectedText);
                analyzeTextSelection(selectedText);
            }
        }
    };

    const handleReset = () => {
        setSelectedText("");
        setHighlightedData(new Set());
        setSelectedDataPoints(SampleData.sales);
    };

    const isTextMatching = (value: string) => {
        const sanitizedSelectedText = selectedText.replace(/,/g, '').toLowerCase();
        const sanitizedValue = value.replace(/,/g, '').toLowerCase();
        
        return sanitizedSelectedText.includes(sanitizedValue);
    };

    const renderDataTable = () => {
        // If no text is selected, display all data points
        const dataToDisplay = selectedText ? 
            selectedDataPoints.filter(point => 
                isTextMatching(point.quarter) || 
                isTextMatching(`${point.revenue}`) || 
                isTextMatching(`${point.profit}`)
            ) : selectedDataPoints;  // Display all data if no text is selected
    
        if (dataToDisplay.length === 0) return null;  // If no data matches or no data, return nothing
    
        return (
            <View style={styles.dataTableContainer}>
                <Text style={styles.tableTitle}>Selected Data Points</Text>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderCell}>Quarter</Text>
                    <Text style={styles.tableHeaderCell}>Revenue ($K)</Text>
                    <Text style={styles.tableHeaderCell}>Profit ($K)</Text>
                </View>
                {dataToDisplay.map((point, index) => (
                    <View key={index} style={[styles.tableRow, selectedText && styles.highlightedRow]}>
                        <Text style={styles.tableCell}>{point.quarter}</Text>
                        <Text style={styles.tableCell}>{`$${point.revenue}`}</Text>
                        <Text style={styles.tableCell}>{`$${point.profit}`}</Text>
                    </View>
                ))}
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructions}>
                    Select text in the document below and then press <strong>ENTER</strong> to highlight related data in the chart
                </Text>
            </View>

            <View style={styles.textContainer}>
                <TouchableWithoutFeedback onPress={handleTextSelection}>
                    <Text
                        ref={textRef}
                        style={styles.reportText}
                        selectable={true}
                    >
                        {SampleData.text}
                    </Text>
                </TouchableWithoutFeedback>
            </View>

            {selectedText ? (
                <View style={styles.selectionContainer}>
                    <Text style={styles.selectionHeader}>Selected Text:</Text>
                    <Text style={styles.selectionText}>"{selectedText}"</Text>
                </View>
            ) : null}

            <View style={{ margin: 10 }}>
                <Button title="Reset" onPress={handleReset} disabled={selectedText.length === 0} />
            </View>

            {renderDataTable()}

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    This demo shows the core concept of the HiChart system described in the research paper.
                </Text>
            </View>
        </ScrollView>
    );
};
