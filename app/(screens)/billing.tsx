import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput
} from "react-native";

import { styles } from "../(auth)/login";
import React, { useState } from "react";

const Billing = () => {
  const [toggle, setToggle] = useState(false);

  const [salaryValue, setSalaryValue] = useState('1200');
  const [bonusesValue, setBonusesValue] = useState('300');
  const [taxValue, setTaxValue] = useState('600');

  const [inflationValue, setInflationValue] = useState('10');

  const [calculatedWage, setCalculatedWage] = useState(0);

  const handleSave = () => {
    setToggle(false);
  }

  const calculateWage = () => {
    if (salaryValue === "" || bonusesValue === "" || inflationValue === "")
      return;

    const bonusWage = Number(salaryValue) + Number(bonusesValue);
    const inflationPercentage = 1 + (Number(inflationValue) / 100); // Convert percentage to decimal

    const taxesWage = bonusWage - Number(taxValue);

    const evaluatedWage = taxesWage * inflationPercentage;

    const evaluatedWageYearly = evaluatedWage * 12

    setCalculatedWage(Math.floor(evaluatedWageYearly));
  };

  
  return (
    <SafeAreaView
      style={styles.containerBlack}
      className={`relative flex flex-1 items-center py-10 px-6 w-full`}
    >
      <View className="flex flex-row w-full justify-between my-6">
        <View className="flex flex-row w-full items-center bg-gray-800 rounded-lg p-3">
          <Image
            source={{
              uri: "https://pk.i-spo.ru/photo/profession/23.jpg?t=1593671377",
            }}
            className="rounded-full mr-3 h-10 w-10"
          />
          <View className="flex gap-y-1">
            <Text className="text-white"> Vacosso Oltaro </Text>

            <Text className="text-white text-xs"> Garson </Text>
          </View>
        </View>
      </View>

      <ScrollView className="overflow-visible">
        <View className="flex flex-row w-full justify-between">
          <View className="flex items-center justify-center p-3 w-[47%] bg-gray-800 rounded-lg">
            <View className="flex flex-row mb-2">
              <Text className="text-white">Date: </Text>
              <Text className="text-white">Start date</Text>
            </View>
            <Text className="text-white text-lg">01.05.2023</Text>
          </View>
          <View className="flex items-center justify-center w-[47%] bg-gray-800 rounded-lg">
            <View className="flex flex-row mb-2">
              <Text className="text-white ">Date: </Text>
              <Text className="text-white ">Contract Ends</Text>
            </View>
            <Text className="text-white text-lg">01.05.2026</Text>
          </View>
        </View>

        <View className="flex w-full justify-between my-6">
          <Text className="text-white text-xl"> Salary </Text>

          <View className="flex w-full justify-between mt-3">
            <TouchableOpacity
              className="flex flex-row justify-between bg-emerald-400 rounded-lg py-3 px-6"
              onPress={() => setToggle(true)}
            >
              <View className="flex">
                <Text className="text-white"> Customize Salary </Text>
                <Text className="text-white"> 4 active options </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex w-full justify-between mb-3">
          <Text className="text-white"> Monthly Salary </Text>

          <View className="flex w-full my-3 bg-gray-800 pr-5 pb-5">
            <View className="flex flex-row items-center justify-between p-3 border-b-[1px] border-gray-600">
              <Text className="text-white"> Bonuses </Text>
              <Text className="text-white">{bonusesValue}$</Text>
            </View>

            <View className="flex flex-row items-center justify-between p-3 border-b-[1px] border-gray-600">
              <Text className="text-white"> Salary </Text>
              <Text className="text-white">{salaryValue}$</Text>
            </View>

            <View className="flex flex-row items-center justify-between p-3 border-b-[1px] border-gray-600">
              <Text className="text-white"> Tax </Text>
              <Text className="text-white">{taxValue}$</Text>
            </View>

            {calculatedWage !== 0 && (
              <View className="flex flex-row items-center justify-between p-3 border-b-[1px] border-gray-600">
                <Text className="text-white"> Year Salary </Text>
                <Text className="text-white">{calculatedWage}$</Text>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity onPress={calculateWage}>
          <View className="flex w-full justify-between">
            <View className="flex flex-row items-center bg-gray-800 rounded-lg p-6">
              <Text className="text-emerald-400 text-2xl"> % </Text>

              <Text className="text-white text-lg"> Calculate </Text>
            </View>
          </View>
        </TouchableOpacity>

        {toggle && (
          <View className="absolute z-20 bg-[#0a0a0a] top-14 bottom-0 left-0 right-0 py-4">
            <View className="relative border-t-2 border-gray-300">
              <TouchableOpacity
                onPress={() => setToggle(false)}
                className="absolute right-0 top-2 z-10"
              >
                <Text className="text-white text-3xl"> X </Text>
              </TouchableOpacity>

              <View className="flex flex-col items-center py-10 gap-y-4">
                <View>
                  <Text className="text-lg text-emerald-400 mb-2">
                    Gross Salary
                  </Text>
                  <TextInput
                    className="border-2 border-emerald-400 min-w-[240px] h-[40px] text-white p-2 rounded-xl"
                    value={salaryValue}
                    onChangeText={(salary) => {
                      if (salary === "") return;
                      setSalaryValue(salary);
                    }}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <Text className="text-lg text-emerald-400 mb-2">Bonuses</Text>
                  <TextInput
                    className="border-2 border-emerald-400 min-w-[240px] h-[40px] text-white p-2 rounded-xl"
                    value={bonusesValue}
                    onChangeText={(bonuses) => {
                      if (bonuses === "") return;
                      setBonusesValue(bonuses);
                    }}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <Text className="text-lg text-emerald-400 mb-2">Taxes</Text>
                  <TextInput
                    className="border-2 border-emerald-400 min-w-[240px] h-[40px] text-white p-2 rounded-xl"
                    value={taxValue}
                    onChangeText={(taxes) => {
                      if (taxes === "") return;
                      setTaxValue(taxes);
                    }}
                    keyboardType="numeric"
                  />
                </View>

                <View>
                  <Text className="text-lg text-emerald-400 mb-2">
                    Inflation (%)
                  </Text>
                  <TextInput
                    className="border-2 border-emerald-400 min-w-[240px] h-[40px] text-white p-2 rounded-xl"
                    value={inflationValue}
                    onChangeText={(inflationRate) =>
                      setInflationValue(inflationRate)
                    }
                    keyboardType="numeric"
                  />
                </View>

                <TouchableOpacity onPress={handleSave}>
                  <Text className="text-white text-2xl font-bold mt-3 p-3 bg-emerald-900 rounded-xl">
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Billing;
