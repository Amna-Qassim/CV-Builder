import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";
import email from "../assets/images/email.jpg";
import addressIcon from "../assets/images/address-icon.jpg";
import phoneIcon from "../assets/images/phone.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

// Create Document Component
export const BasicDocument = ({ dataForm }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      color: "#000000c4",
      margin: 10,
    },
    name: {
      fontSize: 30,
      color: "red",
      margin: 35,
    },
    secondSection: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      fontSize: 14,
      margin: 15,
    },
    contact: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 10,
      fontSize: 10,
      color: "#636363",
    },
    textStyle: {
      fontSize: 10,
      color: "#636363",
    },
    image: {
      width: 15,
      height: 15,
      objectFit: "cover",
      marginRight: 8,
    },
    thirdSection: {
      width: 280,
    },
    summaryStyle: {},
    educationStyle: {
      marginTop: 10,
      fontSize: 10,
      color: "#636363",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* name section */}
        <View>
          <Text style={styles.name}>{dataForm.fullName}</Text>
        </View>
        {/* the main section contain right and left sides */}
        <View style={styles.secondSection}>
          <View style={{ backgroundColor: "#eee", width: 180, padding: 10 }}>
            {/* skills section */}
            <View style={{ marginBottom: 25 }}>
              <Text style={{ marginBottom: 10 }}>Skills</Text>
              {dataForm.select.map((skill) => {
                return (
                  <Text
                    style={{ color: "#636363", fontSize: 12, marginBottom: 5 }}
                  >
                    - {skill}
                  </Text>
                );
              })}
            </View>
            {/* personal contact section */}
            <View>
              <View style={styles.contact}>
                <Image src={email} style={styles.image} />
                <Text>{dataForm.email}</Text>
              </View>
              <View style={styles.contact}>
                <Image src={phoneIcon} style={styles.image} />
                <Text>{dataForm.phoneNumber}</Text>
              </View>
              <View style={styles.contact}>
                <Image src={addressIcon} style={styles.image} />
                <Text>{dataForm.address}</Text>
              </View>
              <View style={styles.contact}>
                <Image src={linkedin} style={styles.image} />
                <Link src={dataForm.linkedIn}>
                  <Text>LinkedIn Profile</Text>
                </Link>
              </View>
              <View style={styles.contact}>
                <Image src={github} style={styles.image} />
                <Link src={dataForm.gitHub}>
                  <Text>GitHub Profile</Text>
                </Link>
              </View>
            </View>
          </View>
          <View style={styles.thirdSection}>
            {/* summary section */}
            <View>
              <Text style={{ marginBottom: 10 }}>Summary:</Text>
              <Text style={styles.textStyle}>{dataForm.pio}</Text>
            </View>
            {/* education section */}
            <View>
              <Text style={{ marginTop: 25 }}>Education:</Text>
              {dataForm.educationState.map((educ) => {
                return (
                  <View style={styles.educationStyle}>
                    <Text style={{ fontSize: 14, marginBottom: 8 }}>
                      University of {educ.academyName} - {educ.location}
                    </Text>
                    <Text>
                      {educ.year} &nbsp;-&nbsp; {educ.department}
                    </Text>
                    <br />
                    <Text>{educ.department}</Text>
                    <br />
                    <Text>{educ.description}</Text>
                  </View>
                );
              })}
            </View>
            {/* experience section */}
            <View>
              <Text style={{ marginTop: 25, marginBottom: 10 }}>
                Your Experiences:
              </Text>
              {dataForm.experienceState.map((exp) => {
                return (
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 14, color: "#636363" }}>
                      {exp.position}
                    </Text>
                    <Text style={styles.textStyle}>
                      {exp.companyName}/ {exp.employmentTypeSelect}
                    </Text>
                    <Text style={styles.textStyle}>{exp.duration}</Text>
                    <Text style={styles.textStyle}>{exp.location}</Text>
                    <Text style={{ fontSize: 9, marginTop: 10, width: 200 }}>
                      {exp.description}
                    </Text>
                  </View>
                );
              })}
            </View>
            {/* Project Information */}
            <View>
              <Text style={{ marginTop: 25, marginBottom: 10 }}>Projects</Text>
              {dataForm.projectState.map((project) => {
                return (
                  <View>
                    <Text
                      style={{
                        color: "#636363",
                        fontSize: 14,
                        marginBottom: 5,
                      }}
                    >
                      - {project.title}
                    </Text>
                    <View style={{ marginLeft: 10 }}>
                      <Text
                        style={{
                          color: "#636363",
                          fontSize: 12,
                          marginBottom: 5,
                        }}
                      >
                        - {project.duration}
                      </Text>
                      <Link
                        src={project.link}
                        style={{ fontSize: 12, marginBottom: 5 }}
                      >
                        - See the demo
                      </Link>
                      <Text
                        style={{
                          color: "#636363",
                          fontSize: 12,
                          marginBottom: 5,
                        }}
                      >
                        - {project.description}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
