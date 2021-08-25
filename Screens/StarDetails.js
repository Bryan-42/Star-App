import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StarDetailsScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            details:{
                url: `http://localhost:5000/star?name=${this.props.navigation.getParam( "Star_name" )}`
            }
        }
    }

    render(){
        const {details, imagePath} = this.state
        if(details.specifications){
            return (
                <View style  = {StyleSheet.container}>
                    <Card title = {details.name} image = {imagePath} imageProps = {{resizeMode:"contain", birth:"100%"}}>
                        <View>
                            <Text style = {styles.cardItem}>
                                {`Distance from Earth : ${details.distance}`}
                            </Text>
                            <Text style = {styles.cardItem}>
                                {`Gravity : ${details.gravity}`}
                            </Text>
                            <Text style = {styles.cardItem}>
                                {`Star Mass : ${details.mass}`}
                            </Text>
                            <Text style = {styles.cardItem}>
                                {`Star Radius : ${details.radius}`}
                            </Text>
                        </View>
                        <View style = {[styles.cardItem, {flexDirection : "column"}]}>
                            <Text>
                                {details.specifications?`specifications :` : ""}
                            </Text>
                            {
                                details.specifications.map((item, index) => (
                                    <Text key = {index.toString()} style = {{marginLeft : 50}}>
                                        {item}
                                    </Text>
                                ))
                            }
                        </View>
                    </Card>
                </View>
            )
        }
        return null
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    cardItem: { marginBottom: 10 }
});