import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  Image,
} from '@react-pdf/renderer';

// IMPORT YOUR LOGO
import logo from './assets/logo1.jpg';

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

  // ───────────────── HEADER ─────────────────
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

  // ───────────────── SECTION HEADINGS ─────────────────
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

  // ───────────────── TABLE ─────────────────
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

  // ───────────────── TEXT AREA ─────────────────
  participantWrap: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },

  participantText: {
    color: TEXT_COLOR,
    marginBottom: 24,
    fontSize: 9,
  },

  // ───────────────── SIGNATURE ─────────────────
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

  // ───────────────── NOTE ─────────────────
  noteText: {
    textAlign: 'center',
    marginTop: 4,
    color: TEXT_COLOR,
    fontSize: 8,
  },
});

// ───────────────── META ROW ─────────────────
const MetaRow = ({ label, value, last }) => (
  <View style={last ? styles.headerMetaRowLast : styles.headerMetaRow}>
    <Text style={styles.headerMetaLabel}>{label}</Text>
    <Text style={styles.headerMetaValue}>{value}</Text>
  </View>
);

// ───────────────── TABLE CELL ─────────────────
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

// ───────────────── PDF DOCUMENT ─────────────────
const ServiceReportPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.paper}>

        {/* ───────────────── HEADER ───────────────── */}
        <View style={styles.headerBox}>

          {/* LOGO */}
          <View style={styles.headerLogo}>
            <Image src={logo} style={styles.headerLogoImage} />
          </View>

          {/* TITLE */}
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>
              FEEDBACK FORM
            </Text>
          </View>

          {/* META */}
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

            {/* OTHER */}
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

            {/* HEADER */}
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

// ───────────────── APP ─────────────────
export default function App() {
  return (
    <PDFViewer
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
    >
      <ServiceReportPDF />
    </PDFViewer>
  );
}

// import React from 'react';
// import {
//   Document,
//   Page,
//   View,
//   Text,
//   StyleSheet,
//   PDFViewer,
//   Font,
// } from '@react-pdf/renderer';

// const BORDER_COLOR = '#c4c4c4';
// const HEADER_BORDER = '#a0a0a0';
// const BLUE_BG = '#eef5fc';
// const SECTION_BLUE = '#1a4e8a';
// const HEADER_BLUE = '#2d338a';
// const DARK_BLUE = '#002b5e';
// const TEXT_COLOR = '#333';
// const GREY_BG = '#f0f0f0';

// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: '#e0e0e0',
//     padding: 20,
//     fontFamily: 'Helvetica',
//     fontSize: 9,
//   },
//   paper: {
//     backgroundColor: '#fff',
//     padding: 24,
//   },

//   // ── Header ──────────────────────────────────────────────────────────────────
//   headerBox: {
//     border: `1px solid ${HEADER_BORDER}`,
//     flexDirection: 'row',
//     backgroundColor: BLUE_BG,
//     marginBottom: 12,
//   },
//   headerLogo: {
//     flex: 1,
//     borderRight: `1px solid ${HEADER_BORDER}`,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8,
//   },
//   headerLogoText: {
//     color: HEADER_BLUE,
//     fontSize: 18,
//     fontFamily: 'Helvetica-Bold',
//     letterSpacing: 1,
//   },
//   headerTitle: {
//     flex: 2,
//     borderRight: `1px solid ${HEADER_BORDER}`,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8,
//   },
//   headerTitleText: {
//     color: DARK_BLUE,
//     fontSize: 13,
//     fontFamily: 'Helvetica-Bold',
//     letterSpacing: 3,
//   },
//   headerMeta: {
//     flex: 1,
//   },
//   headerMetaRow: {
//     flexDirection: 'row',
//     borderBottom: `1px solid ${HEADER_BORDER}`,
//   },
//   headerMetaRowLast: {
//     flexDirection: 'row',
//   },
//   headerMetaLabel: {
//     fontFamily: 'Helvetica-Bold',
//     borderRight: `1px solid ${HEADER_BORDER}`,
//     padding: '3 4',
//     color: TEXT_COLOR,
//     flex: 1,
//   },
//   headerMetaValue: {
//     padding: '3 4',
//     color: TEXT_COLOR,
//     flex: 1,
//   },

//   // ── Section heading ──────────────────────────────────────────────────────────
//   sectionHeading: {
//     color: SECTION_BLUE,
//     fontFamily: 'Helvetica-Bold',
//     fontSize: 8,
//     marginBottom: 4,
//     textTransform: 'uppercase',
//   },
//   sectionWrap: {
//     marginBottom: 12,
//   },

//   // ── Table helpers ────────────────────────────────────────────────────────────
//   table: {
//     border: `1px solid ${BORDER_COLOR}`,
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   cell: {
//     padding: '4 5',
//     color: TEXT_COLOR,
//     fontSize: 9,
//     borderBottom: `1px solid ${BORDER_COLOR}`,
//   },
//   cellNoBorder: {
//     padding: '4 5',
//     color: TEXT_COLOR,
//     fontSize: 9,
//   },
//   cellBold: {
//     fontFamily: 'Helvetica-Bold',
//   },
//   cellBg: {
//     backgroundColor: BLUE_BG,
//   },
//   cellRight: {
//     borderRight: `1px solid ${BORDER_COLOR}`,
//   },

//   // ── Section 1: General Details ───────────────────────────────────────────────
//   genW33: { flex: 1 },

//   // ── Section B: Type of Services ─────────────────────────────────────────────
//   serviceLabel: { flex: 5, padding: '3 5' },
//   serviceCheck: { flex: 1, padding: '3 5' },

//   // ── Section C: Guidelines ────────────────────────────────────────────────────
//   guideLabel: { flex: 4 },
//   guideScore: { flex: 1, textAlign: 'center' },
//   guideHalf: { width: '50%' },

//   // ── Section D: Feedback ──────────────────────────────────────────────────────
//   feedbackTitle: { flex: 15 },
//   feedbackScore: { flex: 1, textAlign: 'center' },

//   // ── Participants / Suggestions ───────────────────────────────────────────────
//   participantWrap: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   participantText: {
//     color: TEXT_COLOR,
//     marginBottom: 24,
//     fontSize: 9,
//   },

//   // ── Signature ────────────────────────────────────────────────────────────────
//   signatureWrap: {
//     paddingHorizontal: 4,
//     marginTop: 20,
//   },
//   signatureLine: {
//     borderTop: '1px solid #000',
//     paddingTop: 3,
//   },
//   signatureText: {
//     color: TEXT_COLOR,
//     fontSize: 9,
//   },

//   // ── Confidential note ────────────────────────────────────────────────────────
//   noteText: {
//     textAlign: 'center',
//     marginTop: 4,
//     color: TEXT_COLOR,
//     fontSize: 8,
//   },
// });

// // ── Small reusable pieces ────────────────────────────────────────────────────

// const MetaRow = ({ label, value, last }) => (
//   <View style={last ? styles.headerMetaRowLast : styles.headerMetaRow}>
//     <Text style={styles.headerMetaLabel}>{label}</Text>
//     <Text style={styles.headerMetaValue}>{value}</Text>
//   </View>
// );

// // Generic table cell builder
// const Td = ({ children, bold, bg, borderRight, borderBottom = true, style }) => {
//   const composed = [
//     borderBottom ? styles.cell : styles.cellNoBorder,
//     bold && styles.cellBold,
//     bg && styles.cellBg,
//     borderRight && styles.cellRight,
//     style,
//   ].filter(Boolean);
//   return <View style={composed}><Text>{children}</Text></View>;
// };

// // ── Main PDF document ────────────────────────────────────────────────────────

// const ServiceReportPDF = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.paper}>

//         {/* ── Header ── */}
//         <View style={styles.headerBox}>
//           <View style={styles.headerLogo}>
//             <Text style={styles.headerLogoText}>UGES</Text>
//           </View>
//           <View style={styles.headerTitle}>
//             <Text style={styles.headerTitleText}>Feedback Form</Text>
//           </View>
//           <View style={styles.headerMeta}>
//             <MetaRow label="Doc. No.:" value="UGES-SE-F-04" />
//             <MetaRow label="Rev. No.:" value="02" />
//             <MetaRow label="Eff. Dt:" value="2025-04-01" />
//             <MetaRow label="Page:" value="1 of 2" last />
//           </View>
//         </View>

//         {/* ── Section 1: General Details ── */}
//         <View style={styles.sectionWrap}>
//           <Text style={styles.sectionHeading}>1. General Details :</Text>
//           <View style={styles.table}>
//             {/* Header row */}
//             <View style={styles.row}>
//               <Td bold bg borderRight borderBottom style={styles.genW33}>Name of Assignment</Td>
//               <Td bold bg borderRight borderBottom style={styles.genW33}>Date</Td>
//               <Td bold bg borderBottom style={styles.genW33}>Customer Employee</Td>
//             </View>
//             {/* Value row */}
//             <View style={styles.row}>
//               <Td borderRight borderBottom style={[styles.genW33, { minHeight: 16 }]}>{' '}</Td>
//               <Td borderRight borderBottom style={[styles.genW33, { minHeight: 16 }]}>{' '}</Td>
//               <Td borderBottom style={[styles.genW33, { minHeight: 16 }]}>{' '}</Td>
//             </View>
//             {/* Header row 2 */}
//             <View style={styles.row}>
//               <Td bold bg borderRight borderBottom style={styles.genW33}>Site Name</Td>
//               <Td bold bg borderRight borderBottom style={styles.genW33}>UGES Employee</Td>
//               <Td bold bg borderBottom style={styles.genW33}>Location/Country</Td>
//             </View>
//             {/* Value row 2 */}
//             <View style={styles.row}>
//               <Td borderRight borderBottom={false} style={[styles.genW33, { minHeight: 16 }]}>{' '}</Td>
//               <Td borderRight borderBottom={false} style={[styles.genW33, { minHeight: 16 }]}>{' '}</Td>
//               <Td borderBottom={false} style={[styles.genW33, { minHeight: 16 }]}>{' '}</Td>
//             </View>
//           </View>
//         </View>

//         {/* ── Section B: Type of Services ── */}
//         <View style={styles.sectionWrap}>
//           <Text style={styles.sectionHeading}>B. Type of Services: (Please ✓ whichever is applicable)</Text>
//           <View style={styles.table}>
//             {[
//               ['Factory Inspection', 'Wind farm audits', 'Inspection & Testing'],
//               ['Project Management Services', 'Training', 'Design Review'],
//               ['Engineering Consulting', 'Conditional monitoring', 'Operations & Maintenance:'],
//             ].map((rowItems, rowIdx) => (
//               <View key={rowIdx} style={styles.row}>
//                 {rowItems.map((label, colIdx) => (
//                   <React.Fragment key={colIdx}>
//                     <Td bg borderRight borderBottom style={{ flex: 5 }}>{label}</Td>
//                     <Td
//                       borderRight={colIdx < 2}
//                       borderBottom
//                       style={{ flex: 1, minHeight: 16 }}
//                     >{' '}</Td>
//                   </React.Fragment>
//                 ))}
//               </View>
//             ))}
//             {/* Other row */}
//             <View style={styles.row}>
//               <Td bg borderRight borderBottom={false} style={{ flex: 5 }}>Other (Specify)</Td>
//               <View style={[styles.cellNoBorder, { flex: 7 }]}><Text>{' '}</Text></View>
//             </View>
//           </View>
//         </View>

//         {/* ── Section C: Guidelines ── */}
//         <View style={styles.sectionWrap}>
//           <Text style={styles.sectionHeading}>C. Guidelines for Feedback Evaluation:</Text>
//           <View style={[styles.table, { width: '50%' }]}>
//             {[
//               ['Not up to the mark', '2'],
//               ['Poor', '4'],
//               ['Acceptable', '6'],
//               ['Meeting Expectations', '8'],
//               ['Exceeding Expectations', '10'],
//             ].map(([label, score], idx) => (
//               <View key={idx} style={styles.row}>
//                 <Td
//                   bg
//                   borderRight
//                   borderBottom={idx < 4}
//                   style={{ flex: 4 }}
//                 >{label}</Td>
//                 <Td
//                   borderBottom={idx < 4}
//                   style={{ flex: 1, textAlign: 'center' }}
//                 >{score}</Td>
//               </View>
//             ))}
//           </View>
//         </View>

//         {/* ── Section D: Feedback Section ── */}
//         <View style={styles.sectionWrap}>
//           <Text style={styles.sectionHeading}>D. Feedback Section:</Text>
//           <View style={styles.table}>
//             {/* Table header */}
//             <View style={[styles.row, { backgroundColor: BLUE_BG }]}>
//               <Td bold borderRight borderBottom style={{ flex: 15 }}>Title/ Description:</Td>
//               {['2', '4', '6', '8', '10'].map((score, idx) => (
//                 <Td
//                   key={score}
//                   bold
//                   borderRight={idx < 4}
//                   borderBottom
//                   style={{ flex: 1, textAlign: 'center' }}
//                 >{score}</Td>
//               ))}
//             </View>
//             {/* Criteria rows */}
//             {[
//               'Knowledge and Command UGES:',
//               'Time/ Schedule Compliance:',
//               'Quality of Service:',
//               'Clarification of queries:',
//               'EHS Practices and Compliances:',
//               'Reporting Structure:',
//             ].map((criteria, idx) => (
//               <View key={idx} style={styles.row}>
//                 <Td borderRight borderBottom style={{ flex: 15 }}>{criteria}</Td>
//                 {[0, 1, 2, 3, 4].map((i) => (
//                   <Td
//                     key={i}
//                     borderRight={i < 4}
//                     borderBottom
//                     style={{ flex: 1, minHeight: 14 }}
//                   >{' '}</Td>
//                 ))}
//               </View>
//             ))}
//             {/* Average row */}
//             <View style={styles.row}>
//               <Td borderRight borderBottom={false} style={{ flex: 15, textAlign: 'right', paddingRight: 6 }}>
//                 Average of overall Feedback
//               </Td>
//               <View style={[styles.cellNoBorder, { flex: 5 }]}><Text>{' '}</Text></View>
//             </View>
//           </View>
//           <Text style={styles.noteText}>
//             (In case of confidential feedback: you may write to "enquiry@uges.co.in")
//           </Text>
//         </View>

//         {/* ── Participants & Suggestions ── */}
//         <View style={styles.participantWrap}>
//           <Text style={styles.participantText}>Name of Participants (Optional):</Text>
//           <Text style={styles.participantText}>
//             Please Give below your Suggestions for Improvement (*Mandatory if assessment is below 6):
//           </Text>
//         </View>

//         {/* ── Signature ── */}
//         <View style={styles.signatureWrap}>
//           <View style={styles.signatureLine}>
//             <Text style={styles.signatureText}>Name/ Sign/Stamp/Date:</Text>
//           </View>
//         </View>

//       </View>
//     </Page>
//   </Document>
// );

// // ── App wrapper: renders a PDFViewer in the browser ──────────────────────────
// export default function App() {
//   return (
//     <PDFViewer style={{ width: '100%', height: '100vh', border: 'none' }}>
//       <ServiceReportPDF />
//     </PDFViewer>
//   );
// }


// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   CssBaseline,
//   createTheme,
//   ThemeProvider,
// } from '@mui/material';

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Arial, sans-serif',
//     fontSize: 12,
//   },
//   components: {
//     MuiTableCell: {
//       styleOverrides: {
//         root: {
//           padding: '6px 8px',
//           borderColor: '#000',
//         },
//       },
//     },
//     MuiCheckbox: {
//       styleOverrides: {
//         root: {
//           padding: '4px',
//         },
//       },
//     },
//   },
// });

// export default function App() {
//   // Repeated styles for consistent form borders
//   const BORDER_COLOR = '#000';
  
//   const sectionHeaderStyle = {
//     bgcolor: '#f0f0f0',
//     fontWeight: 'bold',
//     borderBottom: `1px solid ${BORDER_COLOR}`,
//     padding: '4px 8px',
//     fontSize: '0.85rem'
//   };

//   const cellBorderRight = { borderRight: `1px solid ${BORDER_COLOR}` };
//   const cellBorderBottom = { borderBottom: `1px solid ${BORDER_COLOR}` };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box sx={{ bgcolor: '#e0e0e0', minHeight: '100vh', py: 4 }}>
//         <Container maxWidth="md">
//           <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff' }}>
            
//             {/* Header Section */}
//             <Box sx={{ border: '1px solid #a0a0a0', display: 'flex', mb: 2, bgcolor: '#eef5fc' }}>
              
//               {/* Logo Area */}
//               <Box sx={{ flex: 1, borderRight: '1px solid #a0a0a0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 1 }}>
//                 <Typography variant="h4" fontWeight="bold" sx={{ color: '#2d338a', display: 'flex', alignItems: 'center', letterSpacing: 1 }}>
//                   UGES
//                 </Typography>
//               </Box>
              
//               {/* Title Area */}
//               <Box sx={{ flex: 2, borderRight: '1px solid #a0a0a0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2 }}>
//                 <Typography variant="h6" fontWeight="bold" sx={{ color: '#002b5e', letterSpacing: 3, mb: 0.5 }}><b>SERVICE REPORT</b></Typography>
//               </Box>

//               {/* Document Meta Area */}
//               <Box sx={{ flex: 1 }}>
//                 <Table size="small" sx={{ height: '100%' }}>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell sx={{ fontWeight: 'bold', borderRight: '1px solid #a0a0a0', borderBottom: '1px solid #a0a0a0', py: 0.5, color: '#333' }}>Doc. No.:</TableCell>
//                       <TableCell sx={{ borderBottom: '1px solid #a0a0a0', py: 0.5, color: '#333' }}>UGES-SE-F-04</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell sx={{ fontWeight: 'bold', borderRight: '1px solid #a0a0a0', borderBottom: '1px solid #a0a0a0', py: 0.5, color: '#333' }}>Rev. No.:</TableCell>
//                       <TableCell sx={{ borderBottom: '1px solid #a0a0a0', py: 0.5, color: '#333' }}>02</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell sx={{ fontWeight: 'bold', borderRight: '1px solid #a0a0a0', borderBottom: '1px solid #a0a0a0', py: 0.5, color: '#333' }}>Eff. Dt:</TableCell>
//                       <TableCell sx={{ borderBottom: '1px solid #a0a0a0', py: 0.5, color: '#333' }}>2025-04-01</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell sx={{ fontWeight: 'bold', borderRight: '1px solid #a0a0a0', borderBottom: 'none', py: 0.5, color: '#333' }}>Page:</TableCell>
//                       <TableCell sx={{ borderBottom: 'none', py: 0.5, color: '#333' }}>1 of 2</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </Box>
//             </Box>

//             {/* Section 1: General Details */}
//             <Box sx={{ mb: 3 }}>
//               <Typography sx={{ color: '#1a4e8a', fontWeight: 'bold', fontSize: '0.85rem', mb: 1, textTransform: 'uppercase' }}>
//                 1. General Details :
//               </Typography>
//               <Table size="small" sx={{ border: '1px solid #c4c4c4' }}>
//                 <TableBody>
//                   <TableRow sx={{ bgcolor: '#eef5fc' }}>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', fontWeight: 'bold', width: '33.33%', py: 1 }}>Name of Assignment</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', fontWeight: 'bold', width: '33.33%', py: 1 }}>Date</TableCell>
//                     <TableCell sx={{ borderBottom: '1px solid #c4c4c4', fontWeight: 'bold', width: '33.33%', py: 1 }}>Customer Employee</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', py: 1, color: '#333' }}></TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', py: 1, color: '#333' }}></TableCell>
//                     <TableCell sx={{ borderBottom: '1px solid #c4c4c4', py: 2, color: '#333' }}></TableCell>
//                   </TableRow>
//                   <TableRow sx={{ bgcolor: '#eef5fc' }}>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', fontWeight: 'bold', py: 1 }}>Site Name</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', fontWeight: 'bold', py: 1 }}>UGES Employee</TableCell>
//                     <TableCell sx={{ borderBottom: '1px solid #c4c4c4', fontWeight: 'bold', py: 1 }}>Location/Country</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: 'none', py: 1, color: '#333' }}></TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: 'none', py: 1, color: '#333' }}></TableCell>
//                     <TableCell sx={{ borderBottom: 'none', py: 2, color: '#333' }}></TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </Box>

//             {/* Section B: Type of Services */}
//             <Box sx={{ mb: 3 }}>
//               <Typography sx={{ color: '#1a4e8a', fontWeight: 'bold', fontSize: '0.85rem', mb: 1, textTransform: 'uppercase' }}>
//                 B. Type of Services: (Please ✓ whichever is applicable)
//               </Typography>
//               <Table size="small" sx={{ border: '1px solid #c4c4c4' }}>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', width: '28%', py: 1, color: '#333' }}>Factory Inspection</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', width: '5.33%', textAlign: 'center', py: 1 }}></TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', width: '28%', py: 1, color: '#333' }}>Wind farm audits</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', width: '5.33%', textAlign: 'center', py: 1 }}></TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', width: '28%', py: 1, color: '#333' }}>Inspection & Testing</TableCell>
//                     <TableCell sx={{ borderBottom: '1px solid #c4c4c4', width: '5.33%', textAlign: 'center', fontWeight: 'bold', py: 1, color: '#333' }}></TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Project Management Services</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', py: 1 }}></TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Training</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', py: 1 }}></TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Design Review</TableCell>
//                     <TableCell sx={{ borderBottom: '1px solid #c4c4c4', py: 1 }}></TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Engineering Consulting</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', py: 1 }}></TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Conditional monitoring</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', py: 1 }}></TableCell>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Operations & Maintenance:</TableCell>
//                     <TableCell sx={{ borderBottom: '1px solid #c4c4c4', py: 1 }}></TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: 'none', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Other (Specify)</TableCell>
//                     <TableCell colSpan={5} sx={{ borderBottom: 'none', py: 1 }}></TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </Box>

//             {/* Section C: Guidelines for Feedback Evaluation */}
//             <Box sx={{ mb: 3 }}>
//               <Typography sx={{ color: '#1a4e8a', fontWeight: 'bold', fontSize: '0.85rem', mb: 1, textTransform: 'uppercase' }}>
//                 C. Guidelines for Feedback Evaluation:
//               </Typography>
//               <Box sx={{ width: { xs: '100%', sm: '70%', md: '50%' } }}>
//                 <Table size="small" sx={{ border: '1px solid #c4c4c4' }}>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Not up to the mark</TableCell>
//                       <TableCell sx={{ borderBottom: '1px solid #c4c4c4', py: 1, textAlign: 'center', width: '15%', color: '#333' }}>2</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Poor</TableCell>
//                       <TableCell sx={{ borderBottom: '1px solid #c4c4c4', py: 1, textAlign: 'center', color: '#333' }}>4</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Acceptable</TableCell>
//                       <TableCell sx={{ borderBottom: '1px solid #c4c4c4', py: 1, textAlign: 'center', color: '#333' }}>6</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Meeting Expectations</TableCell>
//                       <TableCell sx={{ borderBottom: '1px solid #c4c4c4', py: 1, textAlign: 'center', color: '#333' }}>8</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: 'none', bgcolor: '#eef5fc', py: 1, color: '#333' }}>Exceeding Expectations</TableCell>
//                       <TableCell sx={{ borderBottom: 'none', py: 1, textAlign: 'center', color: '#333' }}>10</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </Box>
//             </Box>

//             {/* Section D: Feedback Section */}
//             <Box sx={{ mb: 3 }}>
//               <Typography sx={{ color: '#1a4e8a', fontWeight: 'bold', fontSize: '0.85rem', mb: 1, textTransform: 'uppercase' }}>
//                 D. Feedback Section:
//               </Typography>
//               <Table size="small" sx={{ border: '1px solid #c4c4c4' }}>
//                 <TableHead>
//                   <TableRow sx={{ bgcolor: '#eef5fc' }}>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', fontWeight: 'bold', py: 1, color: '#333', width: '75%' }}>Title/ Description:</TableCell>
//                     {['2', '4', '6', '8', '10'].map((score, idx) => (
//                       <TableCell key={score} sx={{ borderRight: idx < 4 ? '1px solid #c4c4c4' : 'none', borderBottom: '1px solid #c4c4c4', fontWeight: 'bold', py: 1, color: '#333', textAlign: 'center', width: '5%' }}>{score}</TableCell>
//                     ))}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {[
//                     "Knowledge and Command UGES:",
//                     "Time/ Schedule Compliance:",
//                     "Quality of Service:",
//                     "Clarification of queries:",
//                     "EHS Practices and Compliances:",
//                     "Reporting Structure:",
//                   ].map((criteria, idx) => (
//                     <TableRow key={idx}>
//                       <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: '1px solid #c4c4c4', py: 1, color: '#333' }}>{criteria}</TableCell>
//                       {[1, 2, 3, 4, 5].map((_, i) => (
//                         <TableCell key={i} sx={{ borderRight: i < 4 ? '1px solid #c4c4c4' : 'none', borderBottom: '1px solid #c4c4c4', py: 1 }}></TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid #c4c4c4', borderBottom: 'none', py: 1, color: '#333', textAlign: 'right', pr: 2 }}>Average of overall Feedback</TableCell>
//                     <TableCell colSpan={5} sx={{ borderBottom: 'none', py: 1 }}></TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//               <Typography variant="body2" sx={{ textAlign: 'center', mt: 1, color: '#333' }}>
//                 (In case of confidential feedback: you may write to "enquiry@uges.co.in")
//               </Typography>
//             </Box>

//             {/* Participants and Suggestions Section */}
//             <Box sx={{ mb: 4, px: 1 }}>
//               <Typography variant="body2" sx={{ color: '#333', mb: 4 }}>
//                 Name of Participants (Optional):
//               </Typography>
//               <Typography variant="body2" sx={{ color: '#333', mb: 8 }}>
//                 Please Give below your Suggestions for Improvement (*Mandatory if assessment is below 6):
//               </Typography>
//             </Box>

//             {/* Signature Section */}
//             <Box sx={{ px: 1, mt: 8, mb: 2 }}>
//               <Box sx={{ borderTop: '1px solid #000', width: '100%', pt: 0.5 }}>
//                 <Typography variant="body2" sx={{ color: '#333' }}>
//                   Name/ Sign/Stamp/Date:
//                 </Typography>
//               </Box>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// }