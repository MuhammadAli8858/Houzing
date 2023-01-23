import React, { useEffect, useState } from "react";
import { Container } from "../Properties/style";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Icons, MenuWrapper, Section, SelectAnt, Wrapper } from "./style";
import { Button, Input } from "../Generic";
import Yandex from "../Generic/Yandex";
import { Checkbox } from "antd";

import { useFormik } from "formik";
import TextArea from "antd/lib/input/TextArea";

export const AddNewHouse = () => {
  const [imgs, setImgs] = useState([]);
  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,
    locations: {
      latitude: 0,
      longitude: 0,
    },
  });
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState("");
  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  //single house
  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments);
        setInitial({ ...res?.data });
      });
  }, []);

  //category
  useEffect(() => {
    request({ url: `/categories/list` }).then((res) =>
      setCategory(res?.data || [])
    );
  }, []);

  // useEffect(() => {
  //   request({ url: `/houses/me` }).then((res) => setData(res?.data || []));
  // }, [search]);

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,

    onSubmit: async (values) => {
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: {
          ...values,
          categoryId: 1,
          name: "wabbrain",
          attachments: imgs,
        },
      }).then((res) => {
        if (res?.success) navigate("/myprofile");
      });
    },
  });
  // const { initialValues } = props;

  // try {
  //   const valuesToSend = values.facilities
  //     .filter((facility, i) => {
  //       return facility.enabled !== initialValues[i].enabled;
  //     })
  //     .map((facility) => ({
  //       kye: facility.facilityName,
  //       value: facility.enabled,
  //     }));
  //   console.log(valuesToSend, "valuesToSend");
  // } catch (err) {
  //   console.log(err, "err");
  // }

  const addImg = () => {
    if (!(imgs.length >= 4) && img) {
      setImgs([
        ...imgs,
        { imgPath: img, id: `${img.length * Math.random()}${img}` },
      ]);
      setImg("");
    }
  };

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <MenuWrapper>
            <h1 className="subTitle">Address</h1>
            <Section>
              <Input
                onChange={formik.handleChange}
                name="country"
                value={formik.values.country}
                placeholder="Country"
              />
              <Input
                onChange={formik.handleChange}
                name="region"
                value={formik.values.region}
                placeholder="Region"
              />
              <Input
                onChange={formik.handleChange}
                name="city"
                value={formik.values.city}
                placeholder="City"
              />
              <Input
                onChange={formik.handleChange}
                name="address"
                value={formik.values.address}
                placeholder="Address"
              />
            </Section>
            <h1 className="subTitle">Apartment info</h1>
            <Section>
              <Input
                type="number"
                name="houseDetails.area"
                value={formik.values.houseDetails?.area}
                onChange={formik.handleChange}
                placeholder="Area"
              />
              <Input
                type="number"
                name="houseDetails.bath"
                value={formik.values.houseDetails?.bath}
                onChange={formik.handleChange}
                placeholder="Bath"
              />
              <Input
                type="number"
                name="houseDetails.beds"
                value={formik.values.houseDetails?.beds}
                onChange={formik.handleChange}
                placeholder="Beds"
              />
              <Input
                type="number"
                name="houseDetails.garage"
                value={formik.values.houseDetails?.garage}
                onChange={formik.handleChange}
                placeholder="Garage"
              />
              <Input
                type="number"
                name="houseDetails.yearBuilt"
                value={formik.values.houseDetails?.yearBuilt}
                onChange={formik.handleChange}
                placeholder="Year Built"
              />
              <Input
                type="number"
                name="houseDetails.room"
                value={formik.values.houseDetails?.room}
                onChange={formik.handleChange}
                placeholder="Rooms"
              />

              <SelectAnt
                defaultValue={"Select Category"}
                value={formik.values?.category}
                onChange={formik.handleChange}
              >
                <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
                {category.map((value) => {
                  return (
                    <SelectAnt.Option
                      onChange={formik.handleChange}
                      key={value?.id}
                      value={value?.id}
                    >
                      {value?.name}
                    </SelectAnt.Option>
                  );
                })}
              </SelectAnt>
            </Section>
            <h1 className="subTitle">Price</h1>
            <Section>
              <Input
                onChange={formik.handleChange}
                name="name"
                value={formik.values?.name}
                placeholder="Name"
              />
              <Input
                onChange={formik.handleChange}
                name="zipCode"
                value={formik.values?.zipCode}
                placeholder="Zip Code"
              />
              <Input
                type="number"
                onChange={formik.handleChange}
                name="price"
                value={formik.values?.price}
                placeholder="Price"
              />
              <Input
                type="number"
                onChange={formik.handleChange}
                name="salePrice"
                value={formik.values?.salePrice}
                placeholder="Sale price"
              />
            </Section>
            <Section>
              <Input
                value={img}
                onChange={({ target: { value } }) => setImg(value)}
                placeholder="Add Image URL"
              />
              <Button onClick={addImg} disabled={imgs.length >= 4}>
                Add Image URL
              </Button>
            </Section>
            <Section flex>
              {imgs.map((value) => {
                return (
                  <pre>
                    {value?.imgPath}{" "}
                    <Icons.Delete
                      onClick={() => {
                        let res = imgs.filter((vl) => vl.id !== value.id);
                        setImgs(res);
                      }}
                    />
                  </pre>
                );
              })}
            </Section>
            <Section>
              <TextArea
                onChange={formik.handleChange}
                rows={6}
                placeholder="description"
                name="description"
              />
            </Section>
            <h1 className="subTitle">Location</h1>
            <Section>
              <Input
                onChange={formik.handleChange}
                name="regions"
                value={formik.values?.regions}
                placeholder="Regions"
              />
              <Input
                onChange={formik.handleChange}
                name="friendlyAddress"
                value={formik.values?.friendlyAddress}
                placeholder="Friendly address"
              />
            </Section>
            <Input
              style={{ marginBottom: "20px" }}
              onChange={formik.handleChange}
              name="mapLocation"
              value={formik.values.mapLocation}
              placeholder="Map location"
            />
            <Yandex />
            <h1 className="subTitle" style={{ marginTop: "20px" }}>
              Amenities
            </h1>
            <Section gap>
              <Section flex>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.busStop "
                >
                  Bus Stop
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.garden"
                >
                  Garden
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.market"
                >
                  Market
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.park"
                >
                  Park
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.parking"
                >
                  Parking
                </Checkbox>
              </Section>
              <Section flex>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.statium"
                >
                  Statium
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.school"
                >
                  School
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.subway"
                >
                  Subway
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.superMarket"
                >
                  Super Market
                </Checkbox>
                <Checkbox onChange={formik.handleChange} name="houseDetails.tv">
                  TV
                </Checkbox>
              </Section>
              <Section flex>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.airCondition"
                >
                  Air Condition
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.courtyard"
                >
                  Courtyard
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.furniture"
                >
                  Furniture
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.gasStove"
                >
                  Gas Stove
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.internet"
                >
                  Internet
                </Checkbox>
              </Section>
              <Section flex>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.waterfront"
                >
                  Waterfront
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.fireplace"
                >
                  Fireplace
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.doorman"
                >
                  Doorman
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.centralHeating"
                >
                  Central Heating
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="houseDetails.cleaningService"
                >
                  Cleaning Service
                </Checkbox>
              </Section>
            </Section>
            <h1 className="subTitle">Select Energy Class</h1>
            <Section>
              <Input
                onChange={formik.handleChange}
                name="energyClass"
                value={formik.values.energyClass}
                placeholder="Energy class"
              />
              <Input
                onChange={formik.handleChange}
                name="energyIndexInKWhM2a"
                value={formik.values.energyIndexInKWhM2a}
                placeholder="Energy Index in kWh/m2a"
              />
            </Section>
            <Section style={{ justifyContent: " end" }}>
              <Button type={"submit"}>{id ? "Update" : "Save"}</Button>
            </Section>
          </MenuWrapper>
        </Container>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;
