import { CloseCircle } from 'iconsax-react-native';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../(auth)/login';

const Billing = () => {
  const [toggle, setToggle] = useState(false);

  const [salaryValue, setSalaryValue] = useState('1200');
  const [bonusesValue, setBonusesValue] = useState('300');
  const [taxValue, setTaxValue] = useState('600');

  const [inflationValue, setInflationValue] = useState('10');

  const [calculatedWage, setCalculatedWage] = useState(0);

  const handleSave = () => {
    setToggle(false);
  };

  const calculateWage = () => {
    if (salaryValue === '' || bonusesValue === '' || inflationValue === '')
      return;

    const bonusWage = Number(salaryValue) + Number(bonusesValue);
    const inflationPercentage = 1 + Number(inflationValue) / 100; // Convert percentage to decimal

    const taxesWage = bonusWage - Number(taxValue);

    const evaluatedWage = taxesWage * inflationPercentage;

    const evaluatedWageYearly = evaluatedWage * 12;

    setCalculatedWage(Math.floor(evaluatedWageYearly));
  };

  return (
    <SafeAreaView
      style={styles.containerBlack}
      className="relative flex w-full flex-1 items-center px-6 py-10"
    >
      <View className="my-6 flex w-full flex-row justify-between">
        <View className="flex w-full flex-row items-center rounded-lg bg-gray-800 p-3">
          <Image
            source={{
              uri: 'https://pk.i-spo.ru/photo/profession/23.jpg?t=1593671377',
            }}
            className="mr-3 h-10 w-10 rounded-full"
          />
          <View className="flex gap-y-1">
            <Text className="text-white"> Vacosso Oltaro </Text>

            <Text className="text-xs text-white"> Garson </Text>
          </View>
        </View>
      </View>

      <ScrollView className="mx-auto overflow-visible">
        <View className="flex w-full flex-row justify-between">
          <View className="flex w-[47%] items-center justify-center rounded-lg bg-gray-800 p-3">
            <View className="mb-2 flex flex-row">
              <Text className="text-white">Date: </Text>
              <Text className="text-white">Start date</Text>
            </View>
            <Text className="text-lg text-white">01.05.2023</Text>
          </View>
          <View className="flex w-[47%] items-center justify-center rounded-lg bg-gray-800">
            <View className="mb-2 flex flex-row">
              <Text className="text-white ">Date: </Text>
              <Text className="text-white ">Contract Ends</Text>
            </View>
            <Text className="text-lg text-white">01.05.2026</Text>
          </View>
        </View>

        <View className="my-6 flex w-full justify-between">
          <Text className="text-xl text-white"> Salary </Text>

          <View className="mt-3 flex w-full justify-between">
            <TouchableOpacity
              className="flex flex-row justify-between rounded-lg bg-emerald-400 px-6 py-3"
              onPress={() => setToggle(true)}
            >
              <View className="flex">
                <Text className="text-white"> Customize Salary </Text>
                <Text className="text-white"> 4 active options </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-3 flex w-full justify-between">
          <Text className="text-white"> Monthly Salary </Text>

          <View className="my-3 flex w-full bg-gray-800 pb-5 pr-5">
            <View className="flex flex-row items-center justify-between border-b-[1px] border-gray-600 p-3">
              <Text className="text-white"> Bonuses </Text>
              <Text className="text-white">{bonusesValue}$</Text>
            </View>

            <View className="flex flex-row items-center justify-between border-b-[1px] border-gray-600 p-3">
              <Text className="text-white"> Salary </Text>
              <Text className="text-white">{salaryValue}$</Text>
            </View>

            <View className="flex flex-row items-center justify-between border-b-[1px] border-gray-600 p-3">
              <Text className="text-white"> Tax </Text>
              <Text className="text-white">{taxValue}$</Text>
            </View>

            {calculatedWage !== 0 && (
              <View className="flex flex-row items-center justify-between border-b-[1px] border-gray-600 p-3">
                <Text className="text-white"> Year Salary </Text>
                <Text className="text-white">{calculatedWage}$</Text>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity onPress={calculateWage}>
          <View className="flex w-full justify-between">
            <View className="flex flex-row items-center rounded-lg bg-gray-800 p-6">
              <Text className="text-2xl text-emerald-400"> % </Text>

              <Text className="text-lg text-white"> Calculate </Text>
            </View>
          </View>
        </TouchableOpacity>

        {toggle && (
          <View className="absolute inset-x-0 bottom-0 top-14 z-20 bg-[#0a0a0a] py-4">
            <View className="relative border-t-2 border-gray-300">
              <TouchableOpacity
                onPress={() => setToggle(false)}
                className="absolute right-0 top-2 z-10"
              >
                <CloseCircle size="32" className="m-4 text-emerald-300" />
              </TouchableOpacity>

              <View className="flex flex-col items-center gap-y-4 py-10">
                <View>
                  <Text className="mb-2 text-lg text-white">
                    Gross Salary
                  </Text>
                  <TextInput
                    className="h-[40px] min-w-[240px] rounded-xl border border-emerald-200 p-2 text-white"
                    value={salaryValue}
                    onChangeText={(salary) => {
                      if (salary === '') return;
                      setSalaryValue(salary);
                    }}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <Text className="mb-2 text-lg text-white">Bonuses</Text>
                  <TextInput
                    className="h-[40px] min-w-[240px] rounded-xl border border-emerald-200 p-2 text-white"
                    value={bonusesValue}
                    onChangeText={(bonuses) => {
                      if (bonuses === '') return;
                      setBonusesValue(bonuses);
                    }}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <Text className="mb-2 text-lg text-white">Taxes</Text>
                  <TextInput
                    className="h-[40px] min-w-[240px] rounded-xl border border-emerald-200 p-2 text-white"
                    value={taxValue}
                    onChangeText={(taxes) => {
                      if (taxes === '') return;
                      setTaxValue(taxes);
                    }}
                    keyboardType="numeric"
                  />
                </View>

                <View>
                  <Text className="mb-2 text-lg text-white">
                    Inflation (%)
                  </Text>
                  <TextInput
                    className="h-[40px] min-w-[240px] rounded-xl border border-emerald-200 p-2 text-white"
                    value={inflationValue}
                    onChangeText={(inflationRate) =>
                      setInflationValue(inflationRate)
                    }
                    keyboardType="numeric"
                  />
                </View>

                <TouchableOpacity
                  onPress={handleSave}
                  className="rounded-xl bg-emerald-900 p-3 min-w-[240px]"
                >
                  <Text className=" font-bold text-white mx-auto">Save</Text>
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
