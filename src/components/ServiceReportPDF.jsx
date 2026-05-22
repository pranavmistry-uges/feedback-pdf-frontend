import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

import logo from '../assets/logo.png';

const BORDER_COLOR = '#c4c4c4';
const HEADER_BORDER = '#a0a0a0';
const BLUE_BG = '#eef5fc';
const SECTION_BLUE = '#1a4e8a';
const DARK_BLUE = '#002b5e';
const TEXT_COLOR = '#333';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    fontFamily: 'Helvetica',
    fontSize: 9,
  },

  paper: {
    backgroundColor: '#fff',
    padding: 24,
  },

  headerBox: {
    border: `1px solid ${HEADER_BORDER}`,
    flexDirection: 'row',
    backgroundColor: BLUE_BG,
    marginBottom: 12,
    width: '100%',
  },

  headerLogo: {
    width: '22%',
    borderRight: `1px solid ${HEADER_BORDER}`,
    position: 'relative',
    minHeight: 70,
  },

  headerLogoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  headerTitle: {
    width: '48%',
    borderRight: `1px solid ${HEADER_BORDER}`,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  headerTitleText: {
    color: DARK_BLUE,
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    textAlign: 'center',
  },

  headerMeta: {
    width: '30%',
    justifyContent: 'center',
  },

  headerMetaRow: {
    flexDirection: 'row',
    borderBottom: `1px solid ${HEADER_BORDER}`,
  },

  headerMetaRowLast: {
    flexDirection: 'row',
  },

  headerMetaLabel: {
    fontFamily: 'Helvetica-Bold',
    borderRight: `1px solid ${HEADER_BORDER}`,
    paddingVertical: 4,
    paddingHorizontal: 5,
    color: TEXT_COLOR,
    width: '45%',
    fontSize: 8,
  },

  headerMetaValue: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    color: TEXT_COLOR,
    width: '55%',
    fontSize: 8,
  },

  sectionHeading: {
    color: SECTION_BLUE,
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  sectionWrap: {
    marginBottom: 12,
  },

  table: {
    border: `1px solid ${BORDER_COLOR}`,
  },

  row: {
    flexDirection: 'row',
  },

  cell: {
    padding: '4 5',
    color: TEXT_COLOR,
    fontSize: 9,
    borderBottom: `1px solid ${BORDER_COLOR}`,
  },

  cellNoBorder: {
    padding: '4 5',
    color: TEXT_COLOR,
    fontSize: 9,
  },

  cellBold: {
    fontFamily: 'Helvetica-Bold',
  },

  cellBg: {
    backgroundColor: BLUE_BG,
  },

  cellRight: {
    borderRight: `1px solid ${BORDER_COLOR}`,
  },

  genW33: {
    flex: 1,
  },

  participantWrap: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },

  participantText: {
    color: TEXT_COLOR,
    marginBottom: 24,
    fontSize: 9,
  },

  signatureWrap: {
    paddingHorizontal: 4,
    marginTop: 20,
  },

  signatureLine: {
    borderTop: '1px solid #000',
    paddingTop: 3,
  },

  signatureText: {
    color: TEXT_COLOR,
    fontSize: 9,
  },

  noteText: {
    textAlign: 'center',
    marginTop: 4,
    color: TEXT_COLOR,
    fontSize: 8,
  },
});

const MetaRow = ({ label, value, last }) => (
  <View style={last ? styles.headerMetaRowLast : styles.headerMetaRow}>
    <Text style={styles.headerMetaLabel}>{label}</Text>
    <Text style={styles.headerMetaValue}>{value}</Text>
  </View>
);

const Td = ({
  children,
  bold,
  bg,
  borderRight,
  borderBottom = true,
  style,
}) => {
  const composed = [
    borderBottom ? styles.cell : styles.cellNoBorder,
    bold && styles.cellBold,
    bg && styles.cellBg,
    borderRight && styles.cellRight,
    style,
  ].filter(Boolean);

  return (
    <View style={composed}>
      <Text>{children}</Text>
    </View>
  );
};

export const ServiceReportPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.paper}>

        <View style={styles.headerBox}>

          <View style={styles.headerLogo}>
            <Image src={logo} style={styles.headerLogoImage} />
          </View>

          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>
              FEEDBACK FORM
            </Text>
          </View>

          <View style={styles.headerMeta}>
            <MetaRow label="Doc. No.:" value="UGES-SE-F-04" />
            <MetaRow label="Rev. No.:" value="02" />
            <MetaRow label="Eff. Dt:" value="2025-04-01" />
            <MetaRow label="Page:" value="1 of 2" last />
          </View>

        </View>

        {/* ───────────────── SECTION 1 ───────────────── */}
        <View style={styles.sectionWrap}>
          <Text style={styles.sectionHeading}>
            1. General Details :
          </Text>

          <View style={styles.table}>

            {/* ROW 1 */}
            <View style={styles.row}>
              <Td bold bg borderRight style={styles.genW33}>
                Name of Assignment
              </Td>

              <Td bold bg borderRight style={styles.genW33}>
                Date
              </Td>

              <Td bold bg style={styles.genW33}>
                Customer Employee
              </Td>
            </View>

            {/* VALUES */}
            <View style={styles.row}>
              <Td borderRight style={[styles.genW33, { minHeight: 16 }]}>
                {' '}
              </Td>

              <Td borderRight style={[styles.genW33, { minHeight: 16 }]}>
                {' '}
              </Td>

              <Td style={[styles.genW33, { minHeight: 16 }]}>
                {' '}
              </Td>
            </View>

            {/* ROW 2 */}
            <View style={styles.row}>
              <Td bold bg borderRight style={styles.genW33}>
                Site Name
              </Td>

              <Td bold bg borderRight style={styles.genW33}>
                UGES Employee
              </Td>

              <Td bold bg style={styles.genW33}>
                Location/Country
              </Td>
            </View>

            {/* VALUES */}
            <View style={styles.row}>
              <Td
                borderRight
                borderBottom={false}
                style={[styles.genW33, { minHeight: 16 }]}
              >
                {' '}
              </Td>

              <Td
                borderRight
                borderBottom={false}
                style={[styles.genW33, { minHeight: 16 }]}
              >
                {' '}
              </Td>

              <Td
                borderBottom={false}
                style={[styles.genW33, { minHeight: 16 }]}
              >
                {' '}
              </Td>
            </View>

          </View>
        </View>

        {/* ───────────────── SECTION B ───────────────── */}
        <View style={styles.sectionWrap}>
          <Text style={styles.sectionHeading}>
            B. Type of Services: (Please ✓ whichever is applicable)
          </Text>

          <View style={styles.table}>

            {[
              ['Factory Inspection', 'Wind farm audits', 'Inspection & Testing'],
              ['Project Management Services', 'Training', 'Design Review'],
              ['Engineering Consulting', 'Conditional monitoring', 'Operations & Maintenance:'],
            ].map((rowItems, rowIdx) => (
              <View key={rowIdx} style={styles.row}>

                {rowItems.map((label, colIdx) => (
                  <React.Fragment key={colIdx}>

                    <Td
                      bg
                      borderRight
                      style={{ flex: 5 }}
                    >
                      {label}
                    </Td>

                    <Td
                      borderRight={colIdx < 2}
                      style={{ flex: 1, minHeight: 16 }}
                    >
                      {' '}
                    </Td>

                  </React.Fragment>
                ))}

              </View>
            ))}

            <View style={styles.row}>
              <Td
                bg
                borderRight
                borderBottom={false}
                style={{ flex: 4.4 }}
              >
                Other (Specify)
              </Td>

              <View style={[styles.cellNoBorder, { flex: 13 }]}>
                <Text>{' '}</Text>
              </View>
            </View>

          </View>
        </View>

        {/* ───────────────── SECTION C ───────────────── */}
        <View style={styles.sectionWrap}>
          <Text style={styles.sectionHeading}>
            C. Guidelines for Feedback Evaluation:
          </Text>

          <View style={[styles.table, { width: '50%' }]}>

            {[
              ['Not up to the mark', '2'],
              ['Poor', '4'],
              ['Acceptable', '6'],
              ['Meeting Expectations', '8'],
              ['Exceeding Expectations', '10'],
            ].map(([label, score], idx) => (
              <View key={idx} style={styles.row}>

                <Td
                  bg
                  borderRight
                  borderBottom={idx < 4}
                  style={{ flex: 4 }}
                >
                  {label}
                </Td>

                <Td
                  borderBottom={idx < 4}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                  }}
                >
                  {score}
                </Td>

              </View>
            ))}

          </View>
        </View>

        {/* ───────────────── SECTION D ───────────────── */}
        <View style={styles.sectionWrap}>
          <Text style={styles.sectionHeading}>
            D. Feedback Section:
          </Text>

          <View style={styles.table}>

            <View style={[styles.row, { backgroundColor: BLUE_BG }]}>

              <Td bold borderRight style={{ flex: 15 }}>
                Title/ Description:
              </Td>

              {['2', '4', '6', '8', '10'].map((score, idx) => (
                <Td
                  key={score}
                  bold
                  borderRight={idx < 4}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                  }}
                >
                  {score}
                </Td>
              ))}

            </View>

            {/* ROWS */}
            {[
              'Knowledge and Command UGES:',
              'Time/ Schedule Compliance:',
              'Quality of Service:',
              'Clarification of queries:',
              'EHS Practices and Compliances:',
              'Reporting Structure:',
            ].map((criteria, idx) => (
              <View key={idx} style={styles.row}>

                <Td borderRight style={{ flex: 15 }}>
                  {criteria}
                </Td>

                {[0, 1, 2, 3, 4].map((i) => (
                  <Td
                    key={i}
                    borderRight={i < 4}
                    style={{
                      flex: 1,
                      minHeight: 14,
                    }}
                  >
                    {' '}
                  </Td>
                ))}

              </View>
            ))}

            {/* AVERAGE */}
            <View style={styles.row}>

              <Td
                borderRight
                borderBottom={false}
                style={{
                  flex: 15,
                  textAlign: 'right',
                  paddingRight: 6,
                }}
              >
                Average of overall Feedback
              </Td>

              <View style={[styles.cellNoBorder, { flex: 5 }]}>
                <Text>{' '}</Text>
              </View>

            </View>

          </View>

          <Text style={styles.noteText}>
            (In case of confidential feedback:
            you may write to "enquiry@uges.co.in")
          </Text>
        </View>

        {/* ───────────────── PARTICIPANTS ───────────────── */}
        <View style={styles.participantWrap}>

          <Text style={styles.participantText}>
            Name of Participants (Optional):
          </Text>

          <Text style={styles.participantText}>
            Please Give below your Suggestions for Improvement
            (*Mandatory if assessment is below 6):
          </Text>

        </View>

        {/* ───────────────── SIGNATURE ───────────────── */}
        <View style={styles.signatureWrap}>

          <View style={styles.signatureLine}>
            <Text style={styles.signatureText}>
              Name/ Sign/Stamp/Date:
            </Text>
          </View>

        </View>

      </View>
    </Page>
  </Document>
);

export default ServiceReportPDF;