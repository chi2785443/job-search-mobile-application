import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error, reFetch } = useFetch("search", {
    query: "React developer",
    page: 1,
    num_pages: 1,
    date_posted: "all",
    language: "en",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearbyjobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
