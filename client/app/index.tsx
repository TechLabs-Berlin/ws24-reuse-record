import ProjectCard from "@/components/ProjectCard";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CatalogList from "./CatalogList";

const ProjectList = () => {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{
            borderColor: "#ddd",
            borderWidth: 1,
            padding: 10,
            borderRadius: 30,
            marginTop: 8,
            marginBottom: 8,
          }}
          placeholder="search"
        />
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProjectList;
